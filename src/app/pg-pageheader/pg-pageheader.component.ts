import { Component, OnInit } from '@angular/core';
import { slide } from "../animation";
@Component({
  selector: 'pg-pageheader',
  templateUrl: './pg-pageheader.component.html',
  styleUrls: ['./pg-pageheader.component.scss'],
  animations: [
    slide
  ]
})
export class PgPageheaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
