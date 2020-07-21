import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";
import { trigger, transition, state, style, animate } from '@angular/animations';
@Component({
  selector: 'pg-productcard',
  templateUrl: './pg-productcard.component.html',
  styleUrls: ['./pg-productcard.component.scss'],
  animations: [
    trigger("fade", [

      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000)
      ]),

      transition('* => void', [
        animate(2000, style({ opacity: 0 }))
      ]),
    ])
  ]
})
export class PgProductcardComponent implements OnInit {
  @Input() product: string;
  @Output() addProduct = new EventEmitter();

  public formValues: {};
  public hide: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  handlefSubmit(f: NgForm) {
    console.log("Product card : form values > ", f.value);
    this.formValues = f.value;
    this.addProduct.emit();

  }

  handleCLick() {
    this.hide = true;
  }
}
