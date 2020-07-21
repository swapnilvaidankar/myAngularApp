import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
// import {catchError} from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';
// import {AppError} from '../common/app-error';
// import { NotFoundError } from '../common/not-found-error';
// import { BadInput } from '../common/bad-input';
import  { NgRedux} from "@angular-redux/store";
import { DataService } from './data.service';
import { IAppState } from '../store';
export interface User{
  myid: number,
  name: string,
  teamname: string,
  salary: number,
  id: number
}


@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{
  //  url : string = "https://jsonplaceholder.typicode.com/posts";
  constructor(http: Http, ngRedux: NgRedux<IAppState>) {
    super("https://jsonplaceholder.typicode.com/posts",http, ngRedux);
   }


  // getPosts(){
  //   return this.http.get(this.url);
  // }

  // createPost(post : HTMLInputElement){
  //   return this.http.post(this.url, JSON.stringify(post))
  //     .pipe(catchError(this.handleError));
  // }

  // updatePost(post){
  //   return this.http.patch(this.url + "/" + post.id, JSON.stringify(post));
  // }

  // deletePost(id){
  //   console.log("ID:",id);
  //   return this.http.get(this.url + '/' + id)
  //     .pipe(catchError(this.handleError));
  // }

  // private handleError(error: Response){
  //   console.log("Status : ", error.status);

  //   if(error.status === 400)
  //   return throwError(new BadInput())
  
  //   if(error.status === 404)
  //     return throwError(new NotFoundError());
  //     // return Observable.throw(new NotFoundError());

  //   // return Observable.throw(new AppError(error));
  //   return throwError(new AppError());
  // }
}
