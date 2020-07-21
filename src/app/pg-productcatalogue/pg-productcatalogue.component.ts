import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { PgProductcardComponent } from '../pg-productcard/pg-productcard.component';
import { fade, slide } from '../animation';

@Component({
  selector: "pg-productcatalogue",
  templateUrl: "./pg-productcatalogue.component.html",
  styleUrls: ["./pg-productcatalogue.component.scss"],
  animations: [
    slide,
    fade
  ]
})
export class PgProductcatalogueComponent implements AfterViewInit {

  @ViewChild(PgProductcardComponent, { static: false }) productCard: PgProductcardComponent;


  constructor() { }

  ngAfterViewInit() {
  }
  products = [
    { product: "Business card" },
    { product: "Booklets" },
    { product: "Flyers" },
    { product: "Rollers" }
  ];
  handlef1Submit(f: NgForm) {
    console.log("Product catalogue : Form values > ", f.value);
    console.log("Form value from products card : ", this.productCard.formValues);

  }
}
