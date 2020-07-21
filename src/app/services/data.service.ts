import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {AppError} from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { map } from 'rxjs/operators';
import  { NgRedux} from "@angular-redux/store";
import { IAppState } from '../store';
import {INCREMENT, GET_POSTS } from "../actions";
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
export class DataService {
  constructor(private url: string, private http: Http, private ngRedux: NgRedux<IAppState>) { }

  getAll_Post(){
    console.log("this is service call");
    return this.http.get(this.url)
      .subscribe( posts =>{
        this.ngRedux.dispatch({type: GET_POSTS, payload: posts.json()})
        // console.log("Posts: ", posts);
      })
      // console.log(this.url  )
  }

  getAll(){
    return this.http.get(this.url)
        .pipe(
            map(response=>response.json()),
            catchError(this.handleError));
  }

  getAllUsers(){
    return this.http.get("http://localhost:8092/users");
  }
  create(resource : HTMLInputElement){
    // return throwError(new AppError()); 

    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        map(response=>response.json()),  
        catchError(this.handleError));
  }

  update(resource){
    return this.http.patch(this.url + "/" + resource.id, JSON.stringify(resource));
  }

  delete(id){
    // return throwError(new AppError());

    console.log("ID:",id);
    return this.http.get(this.url + '/' + id)
      .pipe(
        map(response=>response.json()),  
        catchError(this.handleError));
  }

  private handleError(error: Response){
    console.log("Status : ", error.status);

    if(error.status === 400)
    return throwError(new BadInput())
  
    if(error.status === 404)
      return throwError(new NotFoundError());
      // return Observable.throw(new NotFoundError());

    // return Observable.throw(new AppError(error));
    return throwError(new AppError());
  }
}
