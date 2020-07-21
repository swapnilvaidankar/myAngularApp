import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { PostService } from "../services/post.service";
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

export interface User{
  myid: number,
  name: string,
  teamname: string,
  salary: number,
  id: number
}

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  posts: any[];
  users: User[];

  constructor(private service: PostService) {}


  ngOnInit() {
    this.service.getAll().subscribe(
      posts => {
        this.posts = posts;
      });

      this.service.getAllUsers().subscribe(
        (users) => {
          this.users = users.json();

          console.log("My first web-service data is > ", users.json() );
        }
      )
  }

  // ngOnInit() {
  //   this.service.getAll().subscribe(
  //     response => {
  //       this.posts = response.json();
  //     },
  //     error => {
  //       throw error;
  //     }
  //   );
  // }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = "";
    
    this.service.create(input).subscribe(
      newPost => {
        post["id"] = newPost.id;
        
        console.log(newPost)
      },
      (error: AppError) => {
        this.posts.splice(0,1);

        if (error instanceof BadInput){

        } else {
          throw error;
        }
      }
    );
  }

  updatePost(post) {
    // this.http
    // .patch(this.url + "/" + post.id, JSON.stringify({ isRead: "true" }))
    // this.http.patch(this.url + "/" + post.id, JSON.stringify(post))
    this.service.update(post).subscribe(
      response => {
        console.log(response.json());
      }
    );
  }

  deletePost(post) {
    // this.http.delete(this.url + "/" + post.id)
    // console.log("POST :: " , post);
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
    .subscribe(
      () => {
        // let index = this.posts.indexOf(post);
        // this.posts.splice(index, 1);
      },
      (error: AppError) => {
        this.posts.splice(index, 0, post);
        console.log("Error instance :: ", error);
        if (error instanceof NotFoundError){
          alert("This post already been deleted");
          console.log("Delete ERROR ::: ", error);
        } else {
            throw error;
        }
      }
    );
  }
}
