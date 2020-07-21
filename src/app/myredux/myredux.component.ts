import { Component, OnInit } from '@angular/core';
// import {NgRedux} from "ng2-redux";
import  { NgRedux, select } from "@angular-redux/store";

import { IAppState } from '../store';
import {INCREMENT } from "../actions";
import { PostService } from "../services/post.service";
@Component({
  selector: 'myredux',
  templateUrl: './myredux.component.html',
  styleUrls: ['./myredux.component.scss']
})
export class MyreduxComponent implements OnInit {

  title = 'app works!';
  @select() counter;
  @select() post;
  // @select(['messaging','newMessages']) newMessage;
  // @select((s:IAppState) => s.messaging.newMessages) newMessagesCount;

  constructor(private ngRedux: NgRedux<IAppState>, private service: PostService){
    // var subscription = ngRedux.subscribe(() => {
    //   var store = ngRedux.getState();
    //   this.counter = store.counter;
    // })
  }
  ngOnInit(){
    this.service.getAll_Post();
    console.log("Oninit :", this.post);
  }
  increment(){
    console.log("this clicked!", this.counter);
    this.ngRedux.dispatch({type: INCREMENT});
  }


}
