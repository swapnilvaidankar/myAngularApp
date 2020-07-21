import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "myAngularApp";
  node1 = {
    name: "root",
    children: [
      { name: "Roller Banner", children: [], id: "a" },
      {
        name: "Business Cards",
        children: [
          { name: "Business Cards - Square", children: [], id: "b1" },
          {
            name: "Business Card - Rectangle",
            children: [
              {
                name: "Business Card - Small Rect",
                children: [
                  { name: "Business Card - Small Rect 1", children: [], id: "b211" },
                  { name: "Business Card - Small Rect 2", children: [], id: "b212" }
                ],
                id: "b21"
              },
              { name: "Business Card - Medium Rect 1", children: [], id: "b22" },
              { name: "Business Card - Large Rect 1", children: [], id: "b23" }
            ],
            id: "b2"
          }
        ],
        id: "b"
      },
      {
        name: "Flyers",
        children: [
          { name: "Flyers Square", children: [], id: "c1" },
          { name: "Flyers Diecut", children: [], id: "c2" }
        ],
        id: "c"
      },
      {
        name: "Canvas Prints",
        children: [
          {
            name: "Canvas Prints - Small",
            children: [
              { name: "Canvas Prints - Small Color", children: [], id: "d11" },
              { name: "Canvas Prints - Small Black", children: [], id: "d12" }
            ],
            id: "d1"
          },
          { name: "Canvas Prints - Medium", children: [], id: "d2" }
        ],
        id: "d"
      }
    ]
  };





  node = {
    name: "root",
    children: [
      { name: "a", children: [], id: "a" },
      {
        name: "b",
        children: [
          { name: "b-1", children: [], id: "b1" },
          {
            name: "b-2",
            children: [
              {
                name: "b-2-1",
                children: [
                  { name: "b-2-1-1", children: [], id: "b211" },
                  { name: "b-2-1-2", children: [], id: "b212" }
                ],
                id: "b21"
              },
              { name: "b-2-2", children: [], id: "b22" },
              { name: "b-2-3", children: [], id: "b23" }
            ],
            id: "b2"
          }
        ],
        id: "b"
      },
      {
        name: "c",
        children: [
          { name: "c-1", children: [], id: "c1" },
          { name: "c-2", children: [], id: "c2" }
        ],
        id: "c"
      },
      {
        name: "d",
        children: [
          {
            name: "d-1",
            children: [
              { name: "d-1-1", children: [], id: "d11" },
              { name: "d-1-2", children: [], id: "d12" }
            ],
            id: "d1"
          },
          { name: "d-2", children: [], id: "d2" }
        ],
        id: "d"
      }
    ]
  };
}
