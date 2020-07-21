import { Component, OnInit, Input } from "@angular/core";
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: "pg-tree",
  templateUrl: "./pg-tree.component.html",
  styleUrls: ["./pg-tree.component.scss"],
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
export class PgTreeComponent implements OnInit {
  @Input() node;
  public isCollapse = "isCollapse";
  public isCollapsed = false;
  public rowControls = [];
  k; k1;
  constructor() {}

  ngOnInit() {
    this.addFlag(this.node);
    console.log("menu : ", this.node);
    console.log("rowControls : ", this.rowControls);
  }

  addFlag(menu) {
    menu.children.forEach((element, i) => {
      // console.log("Index : ", i);
      if (element.children.length) {
        this.k = "isCollapse_" + element.id;
        this.k1 = "arrow_" + element.id;
        // this.k = "isCollapse" ;
        // Object.assign(element, { isCollapse: false });
        Object.assign(element, { [this.k]: true });
        this.rowControls.push({ [this.k]: true },{[this.k1] : true});
        // console.log("Length : ", element.children.length);
        this.addFlag(element);
      }
      // console.log("Element :", element);
      console.groupEnd();
    });

    
  }



}

// backup
// import { Component, OnInit, Input } from "@angular/core";

// @Component({
//   selector: "pg-tree",
//   templateUrl: "./pg-tree.component.html",
//   styleUrls: ["./pg-tree.component.scss"]
// })
// export class PgTreeComponent implements OnInit {
//   @Input() node;
//   public isCollapse = "isCollapse";
//   // public isCollapsed = false;
//   public rowControls = [];
//   k;
//   constructor() {}

//   ngOnInit() {
//     this.addFlag(this.node);
//     console.log("menu : ", this.node);
//     console.log("rowControls : ", this.rowControls);
//   }

//   addFlag(menu) {
//     menu.children.forEach((element, i) => {
//       // console.log("Index : ", i);
//       if (element.children.length) {
//         this.k = "isCollapse_" + element.id;
//         // this.k = "isCollapse" ;
//         // Object.assign(element, { isCollapse: false });
//         Object.assign(element, { [this.k]: true });
//         this.rowControls.push({ [this.k]: true });
//         // console.log("Length : ", element.children.length);
//         this.addFlag(element);
//       }
//       // console.log("Element :", element);
//       console.groupEnd();
//     });

    
//   }


  
// }
