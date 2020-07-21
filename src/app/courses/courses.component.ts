import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription, Observable } from 'rxjs';
// import { FirebaseListObserable} from 'angularfire2/database';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
// export class CoursesComponent implements OnDestroy  {
  export class CoursesComponent  {
  // courses$: FirebaseListObserable<any[]>;
  courses$
  course$;
  author$;
  // courses: any[];
  // subscription : Subscription;

  constructor(db : AngularFireDatabase){
    this.courses$ = db.list('/courses').valueChanges();
    this.course$ = db.object('/courses/1').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();

    // this.subscription = db.list('/courses').valueChanges()
    //   .subscribe(courses=>{
    //     this.courses = courses;
    //     console.log(this.courses);
    //   })
      
  }


  // add(course: HTMLInputElement){
  //   this.courses$
  // }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }

  email1="me@domain.com";
  onSave($event){
    console.log("Button was clicked" , $event);
  }
  onKeyUp(email){
    console.log("ENTER was pressed", email);
  }
  onKeyUpTB(){
    console.log(this.email1);
  }
}
