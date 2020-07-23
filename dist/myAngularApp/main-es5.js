(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<pg-header></pg-header>\n<pg-menu></pg-menu>\n<div>\n    <!-- <h2>Hello {{title}}</h2>\n    <pg-tree [node]=\"node\"></pg-tree>\n    <pg-tree-lang [node]=\"node1\"></pg-tree-lang> -->\n  </div>\n<div class=\"pg-container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/courses/courses.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/courses/courses.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- interpolation and property binding -->\n<h1>test</h1>\n<!-- event binding -->\n<button (click)=\"onSave($event)\">Submit</button>\n<!-- template binding -->\n<input #email (keyup.enter)=\"onKeyUp(email.value)\" />\n<!-- two way binding -->\n<input [(ngModel)]=\"email1\" (keyup.enter)=\"onKeyUpTB()\" />\n\n<ul>\n  <li *ngFor=\"let course of courses$ | async\">\n    {{ course }}\n  </li>\n</ul>\n<p>\n  {{ course$ | async | json }}\n</p>\n<p>\n  {{ author$ | async | json }}\n</p>\n\n<!-- <ul>\n  <li>{{ (author$ | async).name }}</li>\n  <li>{{ (author$ | async).students }}</li>\n  <li>{{ (author$ | async).isPremium }}</li>\n</ul> -->\n\n<!-- <input type=\"text\" (keyup.enter) = \"add(course)\" #course> -->\n<!-- <button (click) = 'ngOnDestroy()'>Submit</button> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myredux/myredux.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myredux/myredux.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n\n<p>Counter : {{counter | async}}</p>\n<button (click)=\"increment()\">Increment</button>\n\n<ul class=\"list-group\">\n  <li *ngFor=\"let post of (post | async)\" class=\"list-group-item\">\n    <button class=\"btn btn-primary btn-small\" (click)=\"updatePost(post)\">\n      Update\n    </button>\n    <button class=\"btn btn-secondary btn-small\" (click)=\"deletePost(post)\">\n      Delete\n    </button>\n    {{ post.title }}\n  </li>\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pg-category/pg-category.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pg-category/pg-category.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pg-categories\">\n  <h2 class=\"pg-section-title\">Categories</h2>\n  <ul class=\"pg-category-list\">\n    <li class=\"pg-category-item\">\n      <a href=\"#\" class=\"pg-category-link\">All Products</a>\n    </li>\n    <li class=\"pg-category-item\">\n      <a href=\"#\" class=\"pg-category-link\">Business Cards</a>\n    </li>\n    <li class=\"pg-category-item\">\n      <a href=\"#\" class=\"pg-category-link\">Booklets</a>\n    </li>\n    <li class=\"pg-category-item\">\n      <a href=\"#\" class=\"pg-category-link\">Flyers</a>\n    </li>\n    <li class=\"pg-category-item\">\n      <a href=\"#\" class=\"pg-category-link\">Rollers</a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pg-categoryhome/pg-categoryhome.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pg-categoryhome/pg-categoryhome.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-3 pg-leftColumn\">\n      <!-- <pg-category></pg-category> -->\n    </div>\n    <div class=\"col pg-middleColumn\">\n      <pg-pageheader></pg-pageheader>\n      <pg-productcatalogue></pg-productcatalogue>\n    </div>\n    <div class=\"col-sm-3 pg-rightColumn\" [class.pg-hide]=\"isVisible\">\n      3\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pg-header/pg-header.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pg-header/pg-header.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pg-header\">\n  <div class=\"pg-container\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pg-home/pg-home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pg-home/pg-home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pg-home works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pg-login/pg-login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pg-login/pg-login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Login works!</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pg-menu/pg-menu.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pg-menu/pg-menu.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light pg-dark\">\n    <div class=\"pg-container\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n  \n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a routerLink=\"/\" class=\"nav-link\" href=\"#\">Home\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a routerLink=\"Login\" class=\"nav-link\" href=\"#\">Login</a>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" routerLink=\"Category\">\n                Category\n            </a>\n          </li>\n          <li class=\"nav-item dropdown\">\n              <a class=\"nav-link\" routerLink=\"ProductCard\">\n                Product Card\n              </a>\n            </li>\n          <li class=\"nav-item\">\n            <a routerLink=\"Categoryhome\" class=\"nav-link \" >Category Home Page</a>\n          </li>\n          <li class=\"nav-item\">\n              <a routerLink=\"Posts\" class=\"nav-link \" >Posts</a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"Redux\" class=\"nav-link \" >Redux</a>\n            </li>\n  \n        </ul>\n      </div>\n    </div>\n  \n  </nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pg-pageheader/pg-pageheader.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pg-pageheader/pg-pageheader.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pg-pageheader\">\n  <div class=\"pg-breadcrumbs\">\n    <a href=\"#\">Home</a> >\n    <a href=\"#\">All Products</a>\n  </div>\n  <h1 @slide class=\"pg-pagetitle\">Products</h1>\n  <!-- <span class=\"pg-subtitle\">This is subtitle</span> -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pg-productcard/pg-productcard.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pg-productcard/pg-productcard.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pg-product-card\" [class.pghide]=\"hide\">\n    <form @fade ngForm #f=\"ngForm\" (ngSubmit)=\"handlefSubmit(f)\">\n        <div class=\"form-group\">\n            <label>First Name</label>\n            <input type=\"text\" ngModel name=\"firstName\" #firstName=\"ngModel\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n            <label>Last Name</label>\n            <input type=\"text\" ngModel name=\"lastName\" #lastName=\"ngModel\" class=\"form-control\">\n        </div>\n\n        <div class=\"pg-product-card-imagepane\">\n            <div class=\"pg-product-card-image-area\">\n                <img class=\"pg-product-card-image\" src=\"../../assets/images/BCard.jpg\" />\n            </div>\n        </div>\n        <div class=\"pg-product-card-content\">\n            <div class=\"\">\n                <a href=\"#\" class=\"pg-secondary-link\">Reorder this product</a>\n            </div>\n            <div class=\"pg-sub-panel\">\n                <div class=\"pg-product-card-name\">\n                    <label class=\"pg-subTitle-heading\">{{product}}</label>\n                </div>\n                <div class=\"pg-product-info\">\n                    <img src=\"../../assets/images/wrong.png\" class=\"pg-icon-button\">\n                    <img src=\"../../assets/images/wrong.png\" class=\"pg-icon-button\">\n                </div>\n            </div>\n            <div class=\"pg-form-group-inline\">\n                <label class=\"pg-product-card-label\">\n                    Stock Level\n                </label>\n                <label class=\"pg-label\">\n                    50\n                </label>\n            </div>\n            <div class=\"pg-form-group-inline\">\n                <label class=\"pg-label\">\n                    Min - Max\n                </label>\n                <label class=\"pg-label\">\n                    0 - 0\n                </label>\n            </div>\n            <div class=\"pg-form-group-inline\">\n                <label class=\"pg-label\">\n                    Quality/Pack\n                </label>\n                <label class=\"pg-label\">\n                    100\n                </label>\n            </div>\n            <div class=\"pg-sub-panel\">\n                <div class=\"pg-product-card-priceInfo\">\n                    <div class=\"pg-product-card-quantity\">\n                        <label class=\"pg-label\">1000 per pack</label>\n                    </div>\n                    <div class=\"pg-product-card-starting\">\n                        <label class=\"pg-label\">Starting from</label>\n                    </div>\n                    <div class=\"pg-product-card-price\">\n                        <label class=\"pg-label\">$100.00</label>\n                    </div>\n                    <button class=\"pg-btn pg-btn-small pg-btn-outline pg-m-none\">Pricing</button>\n                </div>\n                <div class=\"pg-buttonHolder-panel\">\n                    <button type=\"submit\" class=\"btn btn-small btn-primary  pg-m-none pg-align-self-end\">Order</button>\n                    <button class=\"btn btn-small btn-primary  pg-m-none pg-align-self-end\" (click)=\"handleCLick()\">Remove</button>\n\n                </div>\n            </div>\n\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pg-productcatalogue/pg-productcatalogue.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pg-productcatalogue/pg-productcatalogue.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pg-productcatalogue\">\n\n  <form @fade ngForm #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label>School Name</label>\n      <input type=\"text\" ngModel name=\"schoolName\" #schoolName=\"ngModel\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>College Name</label>\n      <input type=\"text\" ngModel name=\"collageName\" #collageName=\"ngModel\" class=\"form-control\">\n    </div>\n    <div ngModelGroup=\"contact\">\n      <div class=\"form-group\">\n        <label>Company Name</label>\n        <input type=\"text\" ngModel name=\"companyName\" #companyName=\"ngModel\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>Company Number</label>\n        <input type=\"text\" ngModel name=\"companyNumber\" #companyNumber=\"ngModel\" class=\"form-control\">\n      </div>\n      <ng-container *ngFor=\"let product of products\">\n        <pg-productcard [product]=\"product.product\" (addProduct)=\"handlef1Submit(f)\"></pg-productcard>\n      </ng-container>\n    </div>\n    <!-- <div class=\"pg-buttonHolder-panel\">\n      <button type=\"submit\" class=\"btn btn-small btn-primary  pg-m-none pg-align-self-end\">Order</button>\n    </div> -->\n\n\n  </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pg-tree-lang/pg-tree-lang.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pg-tree-lang/pg-tree-lang.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pg-categories\">\n  <ng-container *ngTemplateOutlet=\"tree; context: { node: node }\">\n  </ng-container>\n</div>\n<ng-template #tree let-node=\"node\">\n  <!-- <div>{{ node.name }}</div> -->\n  <ul\n    *ngIf=\"node.children && node.children.length > 0\"\n    class=\"pg-category-list\"\n  >\n    <ng-container *ngFor=\"let child of node.children; let i = index\">\n      <!-- index : {{i}} Test : {{rowControls[i]['isCollapse_' + child.id] | json}} -->\n      <!-- key : {{child['isCollapse_' + child.id] | json}} opposite : {{!child['isCollapse_' + child.id | json]}} -->\n      <li\n        class=\"pg-category-item\"\n        [class.hasChild]=\"child['isCollapse_' + child.id]\"\n        (click)=\"\n          rowControls[i]['isCollapse_' + child.id] = !rowControls[i][\n            'isCollapse_' + child.id\n          ];\n          $event.stopPropagation()\n        \"\n      >\n        <div class=\"pg-category-link\">\n          <a href=\"#\" i18n = \"Category name | Category name for the Products@@categoryName\">{{ child.name }}</a>\n        </div>\n\n        <div\n          id=\"a\"\n          [ngbCollapse]=\"rowControls[i]['isCollapse_' + child.id]\"\n          [class.hide]=\"!rowControls[i]['isCollapse_' + child.id]\"\n          [class.show1]=\"rowControls[i]['isCollapse_' + child.id]\"\n        >\n          <ng-container *ngTemplateOutlet=\"tree; context: { node: child }\">\n          </ng-container>\n        </div>\n      </li>\n    </ng-container>\n  </ul>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pg-tree/pg-tree.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pg-tree/pg-tree.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pg-tree works!\n</p>\n<p>\n  <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\"\n    aria-controls=\"collapseExample\">\n    Toggle\n  </button>\n</p>\n<div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n  <div class=\"card\" >\n    <div class=\"card-body\" @fade>\n      You can collapse this card by clicking Toggle\n    </div>\n  </div>\n</div>\n<div class=\"pg-categories\">\n  <ng-container *ngTemplateOutlet=\"tree; context: { node: node }\"> </ng-container>\n</div>\n<ng-template #tree let-node=\"node\">\n  <!-- <div>{{ node.name }}</div> -->\n  <ul *ngIf=\"node.children && node.children.length > 0\" class=\"pg-category-list\">\n    <ng-container *ngFor=\"let child of node.children; let i = index\">\n      <!-- index : {{i}} Test : {{rowControls[i]['isCollapse_' + child.id] | json}} -->\n      <!-- key : {{child['isCollapse_' + child.id] | json}} opposite : {{!child['isCollapse_' + child.id | json]}} -->\n      <li class=\"pg-category-item\" [class.hasChild]=\"child['isCollapse_' + child.id]\" (click)=\"\n            rowControls[i]['isCollapse_' + child.id] = !rowControls[i]['isCollapse_' + child.id];\n            $event.stopPropagation();\n          \">\n        <div class=\"pg-category-link\">{{ child.name }}</div>\n\n        <div id=\"a\" [ngbCollapse]=\"rowControls[i]['isCollapse_' + child.id]\" [class.hide]=\"!rowControls[i]['isCollapse_' + child.id]\"\n          [class.show1]=\"rowControls[i]['isCollapse_' + child.id]\">\n          <ng-container *ngTemplateOutlet=\"tree; context: { node: child }\">\n          </ng-container>\n        </div>\n      </li>\n    </ng-container>\n  </ul>\n</ng-template>\n\n<div>{{ rowControls | json }}</div>\n\n<!-- backup -->\n<!-- <ng-container *ngTemplateOutlet=\"tree; context: { node: node }\"> </ng-container>\n<ng-template #tree let-node=\"node\">\n  <div>{{ node.name }}</div>\n  <ul *ngIf=\"node.children && node.children.length > 0\">\n    <ng-container *ngFor=\"let child of node.children; let i = index\">\n       index : {{i}} Test : {{rowControls[i]['isCollapse_' + child.id] | json}}\n          <li class=\"hasChild\" (click)=\"rowControls[i]['isCollapse_' + child.id] = !rowControls[i]['isCollapse_' + child.id];$event.stopPropagation();\">\n        <div [ngbCollapse]=\"rowControls[i]['isCollapse_' + child.id]\">\n          <ng-container *ngTemplateOutlet=\"tree; context: { node: child }\">\n          </ng-container>\n        </div>\n      </li>\n    </ng-container>\n  </ul>\n</ng-template>\n<div>{{ rowControls | json }}</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/posts.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/posts.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input\n  type=\"text\"\n  (keyup.enter)=\"createPost(title)\"\n  #title\n  class=\"form-control\"\n/>\n<ul class=\"list-group\">\n  <li *ngFor=\"let user of users\" class=\"list-group-item\">\n    <label>{{user.name}}</label>\n  </li>\n</ul>\n<ul class=\"list-group\">\n  <li *ngFor=\"let post of posts\" class=\"list-group-item\">\n    <button class=\"btn btn-primary btn-small\" (click)=\"updatePost(post)\">\n      Update\n    </button>\n    <button class=\"btn btn-secondary btn-small\" (click)=\"deletePost(post)\">\n      Delete\n    </button>\n    {{ post.title }}\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/actions.ts":
/*!****************************!*\
  !*** ./src/app/actions.ts ***!
  \****************************/
/*! exports provided: INCREMENT, GET_POSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS", function() { return GET_POSTS; });
var INCREMENT = 'INCREMENT';
var GET_POSTS = 'GET_POSTS';


/***/ }),

/***/ "./src/app/animation.ts":
/*!******************************!*\
  !*** ./src/app/animation.ts ***!
  \******************************/
/*! exports provided: fade, slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slide", function() { return slide; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("fade", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, backgroundColor: 'purple' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter, :leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000)
    ]),
]);
var slide = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("slide", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-20px)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":leave", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100px' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(3000)
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "myAngularApp";
        this.node1 = {
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
        this.node = {
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
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store */ "./src/app/store.ts");
/* harmony import */ var _myredux_myredux_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./myredux/myredux.component */ "./src/app/myredux/myredux.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/courses/courses.component.ts");
/* harmony import */ var _pg_home_pg_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pg-home/pg-home.component */ "./src/app/pg-home/pg-home.component.ts");
/* harmony import */ var _pg_login_pg_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pg-login/pg-login.component */ "./src/app/pg-login/pg-login.component.ts");
/* harmony import */ var _pg_menu_pg_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pg-menu/pg-menu.component */ "./src/app/pg-menu/pg-menu.component.ts");
/* harmony import */ var _pg_header_pg_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pg-header/pg-header.component */ "./src/app/pg-header/pg-header.component.ts");
/* harmony import */ var _pg_category_pg_category_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pg-category/pg-category.component */ "./src/app/pg-category/pg-category.component.ts");
/* harmony import */ var _pg_productcard_pg_productcard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pg-productcard/pg-productcard.component */ "./src/app/pg-productcard/pg-productcard.component.ts");
/* harmony import */ var _pg_categoryhome_pg_categoryhome_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pg-categoryhome/pg-categoryhome.component */ "./src/app/pg-categoryhome/pg-categoryhome.component.ts");
/* harmony import */ var _pg_pageheader_pg_pageheader_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pg-pageheader/pg-pageheader.component */ "./src/app/pg-pageheader/pg-pageheader.component.ts");
/* harmony import */ var _pg_productcatalogue_pg_productcatalogue_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pg-productcatalogue/pg-productcatalogue.component */ "./src/app/pg-productcatalogue/pg-productcatalogue.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _common_app_error_handler__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./common/app-error-handler */ "./src/app/common/app-error-handler.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pg_tree_pg_tree_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pg-tree/pg-tree.component */ "./src/app/pg-tree/pg-tree.component.ts");
/* harmony import */ var _pg_tree_lang_pg_tree_lang_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pg-tree-lang/pg-tree-lang.component */ "./src/app/pg-tree-lang/pg-tree-lang.component.ts");









//comment below lines if you want to run without redux
// import {NgRedux, NgReduxModule} from 'ng2-redux';



//comment above lines if you want to run without redux




















var AppModule = /** @class */ (function () {
    function AppModule(ngRedux) {
        ngRedux.configureStore(_store__WEBPACK_IMPORTED_MODULE_10__["rootReducer"], _store__WEBPACK_IMPORTED_MODULE_10__["INITIAL_STATE"]);
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _courses_courses_component__WEBPACK_IMPORTED_MODULE_15__["CoursesComponent"],
                _pg_home_pg_home_component__WEBPACK_IMPORTED_MODULE_16__["PgHomeComponent"],
                _pg_login_pg_login_component__WEBPACK_IMPORTED_MODULE_17__["PgLoginComponent"],
                _pg_menu_pg_menu_component__WEBPACK_IMPORTED_MODULE_18__["PgMenuComponent"],
                _pg_header_pg_header_component__WEBPACK_IMPORTED_MODULE_19__["PgHeaderComponent"],
                _pg_category_pg_category_component__WEBPACK_IMPORTED_MODULE_20__["PgCategoryComponent"],
                _pg_productcard_pg_productcard_component__WEBPACK_IMPORTED_MODULE_21__["PgProductcardComponent"],
                _pg_categoryhome_pg_categoryhome_component__WEBPACK_IMPORTED_MODULE_22__["PgCategoryhomeComponent"],
                _pg_pageheader_pg_pageheader_component__WEBPACK_IMPORTED_MODULE_23__["PgPageheaderComponent"],
                _pg_productcatalogue_pg_productcatalogue_component__WEBPACK_IMPORTED_MODULE_24__["PgProductcatalogueComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_25__["PostsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"],
                _myredux_myredux_component__WEBPACK_IMPORTED_MODULE_11__["MyreduxComponent"],
                _pg_tree_pg_tree_component__WEBPACK_IMPORTED_MODULE_30__["PgTreeComponent"],
                _pg_tree_lang_pg_tree_lang_component__WEBPACK_IMPORTED_MODULE_31__["PgTreeLangComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_9__["NgReduxModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_15__["CoursesComponent"]
                    },
                    {
                        path: 'Posts',
                        component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_25__["PostsComponent"]
                    },
                    {
                        path: 'Login',
                        component: _pg_login_pg_login_component__WEBPACK_IMPORTED_MODULE_17__["PgLoginComponent"]
                    },
                    {
                        path: 'Category',
                        component: _pg_category_pg_category_component__WEBPACK_IMPORTED_MODULE_20__["PgCategoryComponent"]
                    }, {
                        path: 'ProductCard',
                        component: _pg_productcard_pg_productcard_component__WEBPACK_IMPORTED_MODULE_21__["PgProductcardComponent"]
                    },
                    {
                        path: 'Categoryhome',
                        component: _pg_categoryhome_pg_categoryhome_component__WEBPACK_IMPORTED_MODULE_22__["PgCategoryhomeComponent"]
                    },
                    {
                        path: 'Redux',
                        component: _myredux_myredux_component__WEBPACK_IMPORTED_MODULE_11__["MyreduxComponent"]
                    }
                ]),
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"]
            ],
            providers: [
                _services_post_service__WEBPACK_IMPORTED_MODULE_26__["PostService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"],
                    useClass: _common_app_error_handler__WEBPACK_IMPORTED_MODULE_27__["AppErrorHandler"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
        // export class AppModule { }
        //comment below lines to run without redux
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_9__["NgRedux"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/app-error-handler.ts":
/*!*********************************************!*\
  !*** ./src/app/common/app-error-handler.ts ***!
  \*********************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
var AppErrorHandler = /** @class */ (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        // alert("An unexpected error occured.");
        console.log("ErrorHandler ERROR ::: ", error);
    };
    return AppErrorHandler;
}());



/***/ }),

/***/ "./src/app/common/app-error.ts":
/*!*************************************!*\
  !*** ./src/app/common/app-error.ts ***!
  \*************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
var AppError = /** @class */ (function () {
    function AppError(originalError) {
        this.originalError = originalError;
    }
    return AppError;
}());



/***/ }),

/***/ "./src/app/common/bad-input.ts":
/*!*************************************!*\
  !*** ./src/app/common/bad-input.ts ***!
  \*************************************/
/*! exports provided: BadInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadInput", function() { return BadInput; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-error */ "./src/app/common/app-error.ts");


var BadInput = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BadInput, _super);
    function BadInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BadInput;
}(_app_error__WEBPACK_IMPORTED_MODULE_1__["AppError"]));



/***/ }),

/***/ "./src/app/common/not-found-error.ts":
/*!*******************************************!*\
  !*** ./src/app/common/not-found-error.ts ***!
  \*******************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-error */ "./src/app/common/app-error.ts");


var NotFoundError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NotFoundError, _super);
    function NotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundError;
}(_app_error__WEBPACK_IMPORTED_MODULE_1__["AppError"]));



/***/ }),

/***/ "./src/app/courses/courses.component.scss":
/*!************************************************!*\
  !*** ./src/app/courses/courses.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, tr, td {\n  border: 1px border;\n}\n\nh1, h2 {\n  color: red;\n}\n\n.active {\n  border: 2px solid black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy9EOlxcUHJvamVjdHNcXEFuZ3VsYXJcXG15QW5ndWxhckFwcC9zcmNcXGFwcFxcY291cnNlc1xcY291cnNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY291cnNlcy9jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3Vyc2VzL0Q6XFxQcm9qZWN0c1xcQW5ndWxhclxcbXlBbmd1bGFyQXBwL3NyY1xcYXNzZXRzXFxjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7QUNESjs7QURHQTtFQUNJLFVFTlM7QURNYjs7QURFQTtFQUNJLGtDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2VzL2NvdXJzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxudGFibGUsIHRyLCB0ZHtcclxuICAgIGJvcmRlcjogMXB4IGJvcmRlcjtcclxufVxyXG5oMSxoMntcclxuICAgIGNvbG9yOiAkZm9udC1jb2xvcjtcclxufVxyXG4uYWN0aXZle1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxufSIsInRhYmxlLCB0ciwgdGQge1xuICBib3JkZXI6IDFweCBib3JkZXI7XG59XG5cbmgxLCBoMiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5hY3RpdmUge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xufSIsIiRmb250LWNvbG9yOiByZWQ7XHJcbiRtYXgtd2lkdGg6IDEzMDBweDtcclxuIl19 */"

/***/ }),

/***/ "./src/app/courses/courses.component.ts":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);



// import { FirebaseListObserable} from 'angularfire2/database';
var CoursesComponent = /** @class */ (function () {
    // courses: any[];
    // subscription : Subscription;
    function CoursesComponent(db) {
        // add(course: HTMLInputElement){
        //   this.courses$
        // }
        // ngOnDestroy(){
        //   this.subscription.unsubscribe();
        // }
        this.email1 = "me@domain.com";
        this.courses$ = db.list('/courses').valueChanges();
        this.course$ = db.object('/courses/1').valueChanges();
        this.author$ = db.object('/authors/1').valueChanges();
        // this.subscription = db.list('/courses').valueChanges()
        //   .subscribe(courses=>{
        //     this.courses = courses;
        //     console.log(this.courses);
        //   })
    }
    CoursesComponent.prototype.onSave = function ($event) {
        console.log("Button was clicked", $event);
    };
    CoursesComponent.prototype.onKeyUp = function (email) {
        console.log("ENTER was pressed", email);
    };
    CoursesComponent.prototype.onKeyUpTB = function () {
        console.log(this.email1);
    };
    CoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'courses',
            template: __webpack_require__(/*! raw-loader!./courses.component.html */ "./node_modules/raw-loader/index.js!./src/app/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.scss */ "./src/app/courses/courses.component.scss")]
        })
        // export class CoursesComponent implements OnDestroy  {
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/myredux/myredux.component.scss":
/*!************************************************!*\
  !*** ./src/app/myredux/myredux.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215cmVkdXgvbXlyZWR1eC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/myredux/myredux.component.ts":
/*!**********************************************!*\
  !*** ./src/app/myredux/myredux.component.ts ***!
  \**********************************************/
/*! exports provided: MyreduxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyreduxComponent", function() { return MyreduxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/app/actions.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");


// import {NgRedux} from "ng2-redux";



var MyreduxComponent = /** @class */ (function () {
    // @select(['messaging','newMessages']) newMessage;
    // @select((s:IAppState) => s.messaging.newMessages) newMessagesCount;
    function MyreduxComponent(ngRedux, service) {
        this.ngRedux = ngRedux;
        this.service = service;
        this.title = 'app works!';
        // var subscription = ngRedux.subscribe(() => {
        //   var store = ngRedux.getState();
        //   this.counter = store.counter;
        // })
    }
    MyreduxComponent.prototype.ngOnInit = function () {
        this.service.getAll_Post();
        console.log("Oninit :", this.post);
    };
    MyreduxComponent.prototype.increment = function () {
        console.log("this clicked!", this.counter);
        this.ngRedux.dispatch({ type: _actions__WEBPACK_IMPORTED_MODULE_3__["INCREMENT"] });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MyreduxComponent.prototype, "counter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MyreduxComponent.prototype, "post", void 0);
    MyreduxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'myredux',
            template: __webpack_require__(/*! raw-loader!./myredux.component.html */ "./node_modules/raw-loader/index.js!./src/app/myredux/myredux.component.html"),
            styles: [__webpack_require__(/*! ./myredux.component.scss */ "./src/app/myredux/myredux.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"], _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]])
    ], MyreduxComponent);
    return MyreduxComponent;
}());



/***/ }),

/***/ "./src/app/pg-category/pg-category.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pg-category/pg-category.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pg-categories {\n  margin-top: 20px;\n}\n.pg-categories .pg-category-list {\n  padding-left: 0;\n}\n.pg-categories .pg-category-list .pg-category-item {\n  border-bottom: 1px solid lightgray;\n  list-style: none;\n  line-height: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGctY2F0ZWdvcnkvRDpcXFByb2plY3RzXFxBbmd1bGFyXFxteUFuZ3VsYXJBcHAvc3JjXFxhcHBcXHBnLWNhdGVnb3J5XFxwZy1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGctY2F0ZWdvcnkvcGctY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtBQ0FKO0FEQ0k7RUFFSSxlQUFBO0FDQVI7QURDUTtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9wZy1jYXRlZ29yeS9wZy1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZy1jYXRlZ29yaWVze1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgLnBnLWNhdGVnb3J5LWxpc3R7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAucGctY2F0ZWdvcnktaXRlbXtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnBnLWNhdGVnb3JpZXMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnBnLWNhdGVnb3JpZXMgLnBnLWNhdGVnb3J5LWxpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ucGctY2F0ZWdvcmllcyAucGctY2F0ZWdvcnktbGlzdCAucGctY2F0ZWdvcnktaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pg-category/pg-category.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pg-category/pg-category.component.ts ***!
  \******************************************************/
/*! exports provided: PgCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgCategoryComponent", function() { return PgCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PgCategoryComponent = /** @class */ (function () {
    function PgCategoryComponent() {
    }
    PgCategoryComponent.prototype.ngOnInit = function () {
    };
    PgCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pg-category',
            template: __webpack_require__(/*! raw-loader!./pg-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/pg-category/pg-category.component.html"),
            styles: [__webpack_require__(/*! ./pg-category.component.scss */ "./src/app/pg-category/pg-category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PgCategoryComponent);
    return PgCategoryComponent;
}());



/***/ }),

/***/ "./src/app/pg-categoryhome/pg-categoryhome.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pg-categoryhome/pg-categoryhome.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BnLWNhdGVnb3J5aG9tZS9wZy1jYXRlZ29yeWhvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pg-categoryhome/pg-categoryhome.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pg-categoryhome/pg-categoryhome.component.ts ***!
  \**************************************************************/
/*! exports provided: PgCategoryhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgCategoryhomeComponent", function() { return PgCategoryhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PgCategoryhomeComponent = /** @class */ (function () {
    function PgCategoryhomeComponent() {
        this.isVisible = true;
    }
    PgCategoryhomeComponent.prototype.ngOnInit = function () {
    };
    PgCategoryhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pg-categoryhome',
            template: __webpack_require__(/*! raw-loader!./pg-categoryhome.component.html */ "./node_modules/raw-loader/index.js!./src/app/pg-categoryhome/pg-categoryhome.component.html"),
            styles: [__webpack_require__(/*! ./pg-categoryhome.component.scss */ "./src/app/pg-categoryhome/pg-categoryhome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PgCategoryhomeComponent);
    return PgCategoryhomeComponent;
}());



/***/ }),

/***/ "./src/app/pg-header/pg-header.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pg-header/pg-header.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pg-header {\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n.pg-header .pg-logo {\n  width: 135px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGctaGVhZGVyL0Q6XFxQcm9qZWN0c1xcQW5ndWxhclxcbXlBbmd1bGFyQXBwL3NyY1xcYXBwXFxwZy1oZWFkZXJcXHBnLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGctaGVhZGVyL3BnLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjtBRENJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3BnLWhlYWRlci9wZy1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL2Nzcy9wZy1ncmlkLnNjc3NcIjtcclxuLnBnLWhlYWRlcntcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLnBnLWxvZ297XHJcbiAgICAgICAgd2lkdGg6IDEzNXB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxufSIsIi5wZy1oZWFkZXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGctaGVhZGVyIC5wZy1sb2dvIHtcbiAgd2lkdGg6IDEzNXB4O1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/pg-header/pg-header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pg-header/pg-header.component.ts ***!
  \**************************************************/
/*! exports provided: PgHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgHeaderComponent", function() { return PgHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PgHeaderComponent = /** @class */ (function () {
    function PgHeaderComponent() {
    }
    PgHeaderComponent.prototype.ngOnInit = function () {
    };
    PgHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pg-header',
            template: __webpack_require__(/*! raw-loader!./pg-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/pg-header/pg-header.component.html"),
            styles: [__webpack_require__(/*! ./pg-header.component.scss */ "./src/app/pg-header/pg-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PgHeaderComponent);
    return PgHeaderComponent;
}());



/***/ }),

/***/ "./src/app/pg-home/pg-home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pg-home/pg-home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BnLWhvbWUvcGctaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pg-home/pg-home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pg-home/pg-home.component.ts ***!
  \**********************************************/
/*! exports provided: PgHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgHomeComponent", function() { return PgHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PgHomeComponent = /** @class */ (function () {
    function PgHomeComponent() {
    }
    PgHomeComponent.prototype.ngOnInit = function () {
    };
    PgHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pg-home',
            template: __webpack_require__(/*! raw-loader!./pg-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pg-home/pg-home.component.html"),
            styles: [__webpack_require__(/*! ./pg-home.component.scss */ "./src/app/pg-home/pg-home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PgHomeComponent);
    return PgHomeComponent;
}());



/***/ }),

/***/ "./src/app/pg-login/pg-login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pg-login/pg-login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BnLWxvZ2luL3BnLWxvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pg-login/pg-login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pg-login/pg-login.component.ts ***!
  \************************************************/
/*! exports provided: PgLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgLoginComponent", function() { return PgLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PgLoginComponent = /** @class */ (function () {
    function PgLoginComponent() {
    }
    PgLoginComponent.prototype.ngOnInit = function () {
    };
    PgLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pg-login',
            template: __webpack_require__(/*! raw-loader!./pg-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pg-login/pg-login.component.html"),
            styles: [__webpack_require__(/*! ./pg-login.component.scss */ "./src/app/pg-login/pg-login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PgLoginComponent);
    return PgLoginComponent;
}());



/***/ }),

/***/ "./src/app/pg-menu/pg-menu.component.scss":
/*!************************************************!*\
  !*** ./src/app/pg-menu/pg-menu.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pg-dark {\n  background-image: linear-gradient(to right, purple, navy);\n}\n\n.nav-link {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGctbWVudS9EOlxcUHJvamVjdHNcXEFuZ3VsYXJcXG15QW5ndWxhckFwcC9zcmNcXGFwcFxccGctbWVudVxccGctbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGctbWVudS9wZy1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseURBQUE7QUNBSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wZy1tZW51L3BnLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL2Nzcy8wLVNldHRpbmdzL3NldHRpbmdzLmNvbG9ycy5zY3NzXCI7XHJcbi5wZy1kYXJre1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCRwcmltYXJ5MS1jb2xvciwgJHByaW1hcnkyLWNvbG9yKSAgICBcclxufVxyXG4ubmF2LWxpbmt7XHJcbiAgICBjb2xvcjogJG1lbnUtZm9udC1jb2xvciAhaW1wb3J0YW50O1xyXG59IiwiLnBnLWRhcmsge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHB1cnBsZSwgbmF2eSk7XG59XG5cbi5uYXYtbGluayB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pg-menu/pg-menu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pg-menu/pg-menu.component.ts ***!
  \**********************************************/
/*! exports provided: PgMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgMenuComponent", function() { return PgMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PgMenuComponent = /** @class */ (function () {
    function PgMenuComponent() {
    }
    PgMenuComponent.prototype.ngOnInit = function () {
    };
    PgMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pg-menu',
            template: __webpack_require__(/*! raw-loader!./pg-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/pg-menu/pg-menu.component.html"),
            styles: [__webpack_require__(/*! ./pg-menu.component.scss */ "./src/app/pg-menu/pg-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PgMenuComponent);
    return PgMenuComponent;
}());



/***/ }),

/***/ "./src/app/pg-pageheader/pg-pageheader.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pg-pageheader/pg-pageheader.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pg-pageheader {\n  margin-top: 20px;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 17px;\n}\n.pg-pageheader .pg-pagetitle {\n  font-size: 28px;\n}\n.pg-pageheader .pg-subtitle {\n  font-size: 12px;\n}\n.pg-pageheader .pg-breadcrumbs {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGctcGFnZWhlYWRlci9EOlxcUHJvamVjdHNcXEFuZ3VsYXJcXG15QW5ndWxhckFwcC9zcmNcXGFwcFxccGctcGFnZWhlYWRlclxccGctcGFnZWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGctcGFnZWhlYWRlci9wZy1wYWdlaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FDQ0o7QURBSTtFQUNJLGVBQUE7QUNFUjtBRENJO0VBQ0ksZUFBQTtBQ0NSO0FEQ0k7RUFDSSxlQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9wZy1wYWdlaGVhZGVyL3BnLXBhZ2VoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGctcGFnZWhlYWRlcntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE3cHg7XHJcbiAgICAucGctcGFnZXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZToyOHB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnBnLXN1YnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5wZy1icmVhZGNydW1ic3sgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcbiIsIi5wZy1wYWdlaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1ib3R0b206IDE3cHg7XG59XG4ucGctcGFnZWhlYWRlciAucGctcGFnZXRpdGxlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuLnBnLXBhZ2VoZWFkZXIgLnBnLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnBnLXBhZ2VoZWFkZXIgLnBnLWJyZWFkY3J1bWJzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pg-pageheader/pg-pageheader.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pg-pageheader/pg-pageheader.component.ts ***!
  \**********************************************************/
/*! exports provided: PgPageheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgPageheaderComponent", function() { return PgPageheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation */ "./src/app/animation.ts");



var PgPageheaderComponent = /** @class */ (function () {
    function PgPageheaderComponent() {
    }
    PgPageheaderComponent.prototype.ngOnInit = function () {
    };
    PgPageheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pg-pageheader',
            template: __webpack_require__(/*! raw-loader!./pg-pageheader.component.html */ "./node_modules/raw-loader/index.js!./src/app/pg-pageheader/pg-pageheader.component.html"),
            animations: [
                _animation__WEBPACK_IMPORTED_MODULE_2__["slide"]
            ],
            styles: [__webpack_require__(/*! ./pg-pageheader.component.scss */ "./src/app/pg-pageheader/pg-pageheader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PgPageheaderComponent);
    return PgPageheaderComponent;
}());



/***/ }),

/***/ "./src/app/pg-productcard/pg-productcard.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pg-productcard/pg-productcard.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pg-product-card {\n  border: none;\n  box-shadow: 0 0 5px lightgray;\n  /* border: 1px solid black; */\n  background-color: #eeeeee;\n  border-radius: 4px;\n  /* margin-left: calc(3 * var(--base-margin)); */\n  margin-bottom: 20px;\n  margin-right: 20px;\n  width: 280px;\n}\n\n.pg-product-card .pg-product-card-imagepane {\n  height: 180px;\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.pg-product-card .pg-product-card-content {\n  padding: 15px;\n}\n\n.pg-product-card-image {\n  width: 100%;\n  height: auto;\n  background-color: white;\n}\n\n.pg-product-card-starting .pg-label {\n  /* margin-bottom: 0px; */\n  font-size: 12px;\n}\n\n.pg-product-card-price .pg-label {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.pg-product-card .pg-product-card-name {\n  width: 65%;\n}\n\n.pg-product-card .pg-label {\n  line-height: 1;\n}\n\n.pg-product-card-image-area {\n  width: 180px;\n}\n\n.pghide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGctcHJvZHVjdGNhcmQvRDpcXFByb2plY3RzXFxBbmd1bGFyXFxteUFuZ3VsYXJBcHAvc3JjXFxhcHBcXHBnLXByb2R1Y3RjYXJkXFxwZy1wcm9kdWN0Y2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGctcHJvZHVjdGNhcmQvcGctcHJvZHVjdGNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0dKOztBRERBO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURIQTtFQUNJLFVBQUE7QUNNSjs7QURKQTtFQUNJLGNBQUE7QUNPSjs7QURMQTtFQUNJLFlBQUE7QUNRSjs7QURMQTtFQUNJLGFBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL3BnLXByb2R1Y3RjYXJkL3BnLXByb2R1Y3RjYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wZy1wcm9kdWN0LWNhcmR7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IGxpZ2h0Z3JheTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiBjYWxjKDMgKiB2YXIoLS1iYXNlLW1hcmdpbikpOyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyODBweDtcclxufVxyXG4ucGctcHJvZHVjdC1jYXJkIC5wZy1wcm9kdWN0LWNhcmQtaW1hZ2VwYW5le1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucGctcHJvZHVjdC1jYXJkIC5wZy1wcm9kdWN0LWNhcmQtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLnBnLXByb2R1Y3QtY2FyZC1pbWFnZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnBnLXByb2R1Y3QtY2FyZC1zdGFydGluZyAucGctbGFiZWx7XHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAwcHg7ICovXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnBnLXByb2R1Y3QtY2FyZC1wcmljZSAucGctbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucGctcHJvZHVjdC1jYXJkIC5wZy1wcm9kdWN0LWNhcmQtbmFtZSB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG59XHJcbi5wZy1wcm9kdWN0LWNhcmQgLnBnLWxhYmVse1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuLnBnLXByb2R1Y3QtY2FyZC1pbWFnZS1hcmVhIHtcclxuICAgIHdpZHRoOiAxODBweDtcclxufVxyXG5cclxuLnBnaGlkZXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufSIsIi5wZy1wcm9kdWN0LWNhcmQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggbGlnaHRncmF5O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAvKiBtYXJnaW4tbGVmdDogY2FsYygzICogdmFyKC0tYmFzZS1tYXJnaW4pKTsgKi9cbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjgwcHg7XG59XG5cbi5wZy1wcm9kdWN0LWNhcmQgLnBnLXByb2R1Y3QtY2FyZC1pbWFnZXBhbmUge1xuICBoZWlnaHQ6IDE4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wZy1wcm9kdWN0LWNhcmQgLnBnLXByb2R1Y3QtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnBnLXByb2R1Y3QtY2FyZC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucGctcHJvZHVjdC1jYXJkLXN0YXJ0aW5nIC5wZy1sYWJlbCB7XG4gIC8qIG1hcmdpbi1ib3R0b206IDBweDsgKi9cbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucGctcHJvZHVjdC1jYXJkLXByaWNlIC5wZy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wZy1wcm9kdWN0LWNhcmQgLnBnLXByb2R1Y3QtY2FyZC1uYW1lIHtcbiAgd2lkdGg6IDY1JTtcbn1cblxuLnBnLXByb2R1Y3QtY2FyZCAucGctbGFiZWwge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLnBnLXByb2R1Y3QtY2FyZC1pbWFnZS1hcmVhIHtcbiAgd2lkdGg6IDE4MHB4O1xufVxuXG4ucGdoaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pg-productcard/pg-productcard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pg-productcard/pg-productcard.component.ts ***!
  \************************************************************/
/*! exports provided: PgProductcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgProductcardComponent", function() { return PgProductcardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var PgProductcardComponent = /** @class */ (function () {
    function PgProductcardComponent() {
        this.addProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hide = false;
    }
    PgProductcardComponent.prototype.ngOnInit = function () {
    };
    PgProductcardComponent.prototype.handlefSubmit = function (f) {
        console.log("Product card : form values > ", f.value);
        this.formValues = f.value;
        this.addProduct.emit();
    };
    PgProductcardComponent.prototype.handleCLick = function () {
        this.hide = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PgProductcardComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PgProductcardComponent.prototype, "addProduct", void 0);
    PgProductcardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pg-productcard',
            template: __webpack_require__(/*! raw-loader!./pg-productcard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pg-productcard/pg-productcard.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fade", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(2000)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                    ]),
                ])
            ],
            styles: [__webpack_require__(/*! ./pg-productcard.component.scss */ "./src/app/pg-productcard/pg-productcard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PgProductcardComponent);
    return PgProductcardComponent;
}());



/***/ }),

/***/ "./src/app/pg-productcatalogue/pg-productcatalogue.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pg-productcatalogue/pg-productcatalogue.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pg-productcatalogue {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGctcHJvZHVjdGNhdGFsb2d1ZS9EOlxcUHJvamVjdHNcXEFuZ3VsYXJcXG15QW5ndWxhckFwcC9zcmNcXGFwcFxccGctcHJvZHVjdGNhdGFsb2d1ZVxccGctcHJvZHVjdGNhdGFsb2d1ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGctcHJvZHVjdGNhdGFsb2d1ZS9wZy1wcm9kdWN0Y2F0YWxvZ3VlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BnLXByb2R1Y3RjYXRhbG9ndWUvcGctcHJvZHVjdGNhdGFsb2d1ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZy1wcm9kdWN0Y2F0YWxvZ3Vle1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufSIsIi5wZy1wcm9kdWN0Y2F0YWxvZ3VlIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pg-productcatalogue/pg-productcatalogue.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pg-productcatalogue/pg-productcatalogue.component.ts ***!
  \**********************************************************************/
/*! exports provided: PgProductcatalogueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgProductcatalogueComponent", function() { return PgProductcatalogueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pg_productcard_pg_productcard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pg-productcard/pg-productcard.component */ "./src/app/pg-productcard/pg-productcard.component.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animation */ "./src/app/animation.ts");




var PgProductcatalogueComponent = /** @class */ (function () {
    function PgProductcatalogueComponent() {
        this.products = [
            { product: "Business card" },
            { product: "Booklets" },
            { product: "Flyers" },
            { product: "Rollers" }
        ];
    }
    PgProductcatalogueComponent.prototype.ngAfterViewInit = function () {
    };
    PgProductcatalogueComponent.prototype.handlef1Submit = function (f) {
        console.log("Product catalogue : Form values > ", f.value);
        console.log("Form value from products card : ", this.productCard.formValues);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_pg_productcard_pg_productcard_component__WEBPACK_IMPORTED_MODULE_2__["PgProductcardComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _pg_productcard_pg_productcard_component__WEBPACK_IMPORTED_MODULE_2__["PgProductcardComponent"])
    ], PgProductcatalogueComponent.prototype, "productCard", void 0);
    PgProductcatalogueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "pg-productcatalogue",
            template: __webpack_require__(/*! raw-loader!./pg-productcatalogue.component.html */ "./node_modules/raw-loader/index.js!./src/app/pg-productcatalogue/pg-productcatalogue.component.html"),
            animations: [
                _animation__WEBPACK_IMPORTED_MODULE_3__["slide"],
                _animation__WEBPACK_IMPORTED_MODULE_3__["fade"]
            ],
            styles: [__webpack_require__(/*! ./pg-productcatalogue.component.scss */ "./src/app/pg-productcatalogue/pg-productcatalogue.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PgProductcatalogueComponent);
    return PgProductcatalogueComponent;
}());



/***/ }),

/***/ "./src/app/pg-tree-lang/pg-tree-lang.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pg-tree-lang/pg-tree-lang.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hasChild {\n  background: url('down.png');\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: 99% 15px;\n  cursor: pointer;\n}\n\n.show1 {\n  display: block !important;\n}\n\n.hide {\n  display: none !important;\n}\n\n.pg-categories {\n  width: 300px;\n  margin-top: 20px;\n}\n\n.pg-categories .pg-category-list {\n  padding-left: 10px;\n}\n\n.pg-categories .pg-category-list .pg-category-item {\n  border-bottom: 1px solid lightgray;\n  list-style: none;\n  line-height: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGctdHJlZS1sYW5nL0Q6XFxQcm9qZWN0c1xcQW5ndWxhclxcbXlBbmd1bGFyQXBwL3NyY1xcYXBwXFxwZy10cmVlLWxhbmdcXHBnLXRyZWUtbGFuZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGctdHJlZS1sYW5nL3BnLXRyZWUtbGFuZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURBQTtFQUNJLHdCQUFBO0FDR0o7O0FEREE7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURGSTtFQUVJLGtCQUFBO0FDR1I7O0FERlE7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0laIiwiZmlsZSI6InNyYy9hcHAvcGctdHJlZS1sYW5nL3BnLXRyZWUtbGFuZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYXNDaGlsZHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9kb3duLnBuZycpOyAgICBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5OSUgMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2hvdzF7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcbi5oaWRle1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5wZy1jYXRlZ29yaWVze1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgLnBnLWNhdGVnb3J5LWxpc3R7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAucGctY2F0ZWdvcnktaXRlbXtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmhhc0NoaWxkIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9kb3duLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5OSUgMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2hvdzEge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBnLWNhdGVnb3JpZXMge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ucGctY2F0ZWdvcmllcyAucGctY2F0ZWdvcnktbGlzdCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5wZy1jYXRlZ29yaWVzIC5wZy1jYXRlZ29yeS1saXN0IC5wZy1jYXRlZ29yeS1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDM7XG59Il19 */"

/***/ }),

/***/ "./src/app/pg-tree-lang/pg-tree-lang.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pg-tree-lang/pg-tree-lang.component.ts ***!
  \********************************************************/
/*! exports provided: PgTreeLangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgTreeLangComponent", function() { return PgTreeLangComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PgTreeLangComponent = /** @class */ (function () {
    function PgTreeLangComponent() {
        // public isCollapsed = false;
        this.rowControls = [];
    }
    PgTreeLangComponent.prototype.ngOnInit = function () {
        this.addFlag(this.node);
        console.log("menu : ", this.node);
        console.log("rowControls : ", this.rowControls);
    };
    PgTreeLangComponent.prototype.addFlag = function (menu) {
        var _this = this;
        menu.children.forEach(function (element, i) {
            var _a, _b, _c;
            if (element.children.length) {
                _this.k = "isCollapse_" + element.id;
                _this.k1 = "arrow_" + element.id;
                Object.assign(element, (_a = {}, _a[_this.k] = true, _a));
                _this.rowControls.push((_b = {}, _b[_this.k] = true, _b), (_c = {}, _c[_this.k1] = true, _c));
                _this.addFlag(element);
            }
            console.groupEnd();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PgTreeLangComponent.prototype, "node", void 0);
    PgTreeLangComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pg-tree-lang',
            template: __webpack_require__(/*! raw-loader!./pg-tree-lang.component.html */ "./node_modules/raw-loader/index.js!./src/app/pg-tree-lang/pg-tree-lang.component.html"),
            styles: [__webpack_require__(/*! ./pg-tree-lang.component.scss */ "./src/app/pg-tree-lang/pg-tree-lang.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PgTreeLangComponent);
    return PgTreeLangComponent;
}());



/***/ }),

/***/ "./src/app/pg-tree/pg-tree.component.scss":
/*!************************************************!*\
  !*** ./src/app/pg-tree/pg-tree.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hasChild {\n  background: url('down.png');\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: 99% 15px;\n  cursor: pointer;\n}\n\n.show1 {\n  display: block !important;\n}\n\n.hide {\n  display: none !important;\n}\n\n.pg-categories {\n  width: 300px;\n  margin-top: 20px;\n}\n\n.pg-categories .pg-category-list {\n  padding-left: 10px;\n}\n\n.pg-categories .pg-category-list .pg-category-item {\n  border-bottom: 1px solid lightgray;\n  list-style: none;\n  line-height: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGctdHJlZS9EOlxcUHJvamVjdHNcXEFuZ3VsYXJcXG15QW5ndWxhckFwcC9zcmNcXGFwcFxccGctdHJlZVxccGctdHJlZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGctdHJlZS9wZy10cmVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtBQ0VKOztBREFBO0VBQ0ksd0JBQUE7QUNHSjs7QUREQTtFQUVJLFlBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREZJO0VBRUksa0JBQUE7QUNHUjs7QURGUTtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSVoiLCJmaWxlIjoic3JjL2FwcC9wZy10cmVlL3BnLXRyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFzQ2hpbGR7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZG93bi5wbmcnKTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTklIDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNob3cxe1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG4uaGlkZXtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ucGctY2F0ZWdvcmllc3tcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIC5wZy1jYXRlZ29yeS1saXN0e1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgLnBnLWNhdGVnb3J5LWl0ZW17XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5oYXNDaGlsZCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZG93bi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTklIDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNob3cxIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wZy1jYXRlZ29yaWVzIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnBnLWNhdGVnb3JpZXMgLnBnLWNhdGVnb3J5LWxpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ucGctY2F0ZWdvcmllcyAucGctY2F0ZWdvcnktbGlzdCAucGctY2F0ZWdvcnktaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pg-tree/pg-tree.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pg-tree/pg-tree.component.ts ***!
  \**********************************************/
/*! exports provided: PgTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgTreeComponent", function() { return PgTreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var PgTreeComponent = /** @class */ (function () {
    function PgTreeComponent() {
        this.isCollapse = "isCollapse";
        this.isCollapsed = false;
        this.rowControls = [];
    }
    PgTreeComponent.prototype.ngOnInit = function () {
        this.addFlag(this.node);
        console.log("menu : ", this.node);
        console.log("rowControls : ", this.rowControls);
    };
    PgTreeComponent.prototype.addFlag = function (menu) {
        var _this = this;
        menu.children.forEach(function (element, i) {
            var _a, _b, _c;
            // console.log("Index : ", i);
            if (element.children.length) {
                _this.k = "isCollapse_" + element.id;
                _this.k1 = "arrow_" + element.id;
                // this.k = "isCollapse" ;
                // Object.assign(element, { isCollapse: false });
                Object.assign(element, (_a = {}, _a[_this.k] = true, _a));
                _this.rowControls.push((_b = {}, _b[_this.k] = true, _b), (_c = {}, _c[_this.k1] = true, _c));
                // console.log("Length : ", element.children.length);
                _this.addFlag(element);
            }
            // console.log("Element :", element);
            console.groupEnd();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PgTreeComponent.prototype, "node", void 0);
    PgTreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "pg-tree",
            template: __webpack_require__(/*! raw-loader!./pg-tree.component.html */ "./node_modules/raw-loader/index.js!./src/app/pg-tree/pg-tree.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fade", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(2000)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                    ]),
                ])
            ],
            styles: [__webpack_require__(/*! ./pg-tree.component.scss */ "./src/app/pg-tree/pg-tree.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PgTreeComponent);
    return PgTreeComponent;
}());

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


/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/not-found-error */ "./src/app/common/not-found-error.ts");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/bad-input */ "./src/app/common/bad-input.ts");





var PostsComponent = /** @class */ (function () {
    function PostsComponent(service) {
        this.service = service;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll().subscribe(function (posts) {
            _this.posts = posts;
        });
        this.service.getAllUsers().subscribe(function (users) {
            _this.users = users.json();
            console.log("My first web-service data is > ", users.json());
        });
    };
    // ngOnInit() {
    //   this.service.getAll().subscribe(
    //     response => {
    //       this.posts = response.json();
    //     },
    //     error => {
    //       throw error;
    //     }
    //   );
    // }
    PostsComponent.prototype.createPost = function (input) {
        var _this = this;
        var post = { title: input.value };
        this.posts.splice(0, 0, post);
        input.value = "";
        this.service.create(input).subscribe(function (newPost) {
            post["id"] = newPost.id;
            console.log(newPost);
        }, function (error) {
            _this.posts.splice(0, 1);
            if (error instanceof _common_bad_input__WEBPACK_IMPORTED_MODULE_4__["BadInput"]) {
            }
            else {
                throw error;
            }
        });
    };
    PostsComponent.prototype.updatePost = function (post) {
        // this.http
        // .patch(this.url + "/" + post.id, JSON.stringify({ isRead: "true" }))
        // this.http.patch(this.url + "/" + post.id, JSON.stringify(post))
        this.service.update(post).subscribe(function (response) {
            console.log(response.json());
        });
    };
    PostsComponent.prototype.deletePost = function (post) {
        var _this = this;
        // this.http.delete(this.url + "/" + post.id)
        // console.log("POST :: " , post);
        var index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.service.delete(post.id)
            .subscribe(function () {
            // let index = this.posts.indexOf(post);
            // this.posts.splice(index, 1);
        }, function (error) {
            _this.posts.splice(index, 0, post);
            console.log("Error instance :: ", error);
            if (error instanceof _common_not_found_error__WEBPACK_IMPORTED_MODULE_3__["NotFoundError"]) {
                alert("This post already been deleted");
                console.log("Delete ERROR ::: ", error);
            }
            else {
                throw error;
            }
        });
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "posts",
            template: __webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/app-error */ "./src/app/common/app-error.ts");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/not-found-error */ "./src/app/common/not-found-error.ts");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/bad-input */ "./src/app/common/bad-input.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions */ "./src/app/actions.ts");











var DataService = /** @class */ (function () {
    function DataService(url, http, ngRedux) {
        this.url = url;
        this.http = http;
        this.ngRedux = ngRedux;
    }
    DataService.prototype.getAll_Post = function () {
        var _this = this;
        console.log("this is service call");
        return this.http.get(this.url)
            .subscribe(function (posts) {
            _this.ngRedux.dispatch({ type: _actions__WEBPACK_IMPORTED_MODULE_9__["GET_POSTS"], payload: posts.json() });
            // console.log("Posts: ", posts);
        });
        // console.log(this.url  )
    };
    DataService.prototype.getAll = function () {
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.getAllUsers = function () {
        return this.http.get("http://localhost:8092/users");
    };
    DataService.prototype.create = function (resource) {
        // return throwError(new AppError()); 
        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.update = function (resource) {
        return this.http.patch(this.url + "/" + resource.id, JSON.stringify(resource));
    };
    DataService.prototype.delete = function (id) {
        // return throwError(new AppError());
        console.log("ID:", id);
        return this.http.get(this.url + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.handleError = function (error) {
        console.log("Status : ", error.status);
        if (error.status === 400)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _common_bad_input__WEBPACK_IMPORTED_MODULE_7__["BadInput"]());
        if (error.status === 404)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__["NotFoundError"]());
        // return Observable.throw(new NotFoundError());
        // return Observable.throw(new AppError(error));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"]());
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_redux_store__WEBPACK_IMPORTED_MODULE_8__["NgRedux"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");



// import {catchError} from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';
// import {AppError} from '../common/app-error';
// import { NotFoundError } from '../common/not-found-error';
// import { BadInput } from '../common/bad-input';


var PostService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PostService, _super);
    //  url : string = "https://jsonplaceholder.typicode.com/posts";
    function PostService(http, ngRedux) {
        return _super.call(this, "https://jsonplaceholder.typicode.com/posts", http, ngRedux) || this;
    }
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"]])
    ], PostService);
    return PostService;
}(_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]));



/***/ }),

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/*! exports provided: INITIAL_STATE, rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/actions.ts");
/* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tassign */ "./node_modules/tassign/lib/index.js");
/* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tassign__WEBPACK_IMPORTED_MODULE_1__);


var INITIAL_STATE = {
    counter: 0,
    post: {}
    // messaging: {
    //     newMessages : 5
    // }
};
function rootReducer(state, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["INCREMENT"]:
            console.log("this is reducer");
            //   return { counter: state.counter + 1};
            return Object(tassign__WEBPACK_IMPORTED_MODULE_1__["tassign"])(state, { counter: state.counter + 1 });
        // return Object.assign({}, state, {counter: state.counter + 1});
        case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS"]:
            console.log("this is post request", action.payload);
        //   return { counter: state.counter, post: action.payload };
        //   return tassign(state, {counter: state.counter, post: action.payload});
    }
    return state;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB77o5jWuh05CE6iDOMg_MASU1APT651U4",
        authDomain: "firedemo-6f715.firebaseapp.com",
        databaseURL: "https://firedemo-6f715.firebaseio.com",
        projectId: "firedemo-6f715",
        storageBucket: "firedemo-6f715.appspot.com",
        messagingSenderId: "249585828352",
        appId: "1:249585828352:web:e544033a3ccd2eb7"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Angular\myAngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map