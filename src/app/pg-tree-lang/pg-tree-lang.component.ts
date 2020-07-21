import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pg-tree-lang',
  templateUrl: './pg-tree-lang.component.html',
  styleUrls: ['./pg-tree-lang.component.scss']
})
export class PgTreeLangComponent implements OnInit {
  @Input() node;
  // public isCollapsed = false;
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
      if (element.children.length) {
        this.k = "isCollapse_" + element.id;
        this.k1 = "arrow_" + element.id;
        Object.assign(element, { [this.k]: true });
        this.rowControls.push({ [this.k]: true },{[this.k1] : true});
        this.addFlag(element);
      }
      console.groupEnd();
    });

    
  }




}
