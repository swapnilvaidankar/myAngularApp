import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//comment below lines if you want to run without redux

// import {NgRedux, NgReduxModule} from 'ng2-redux';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {IAppState, rootReducer, INITIAL_STATE} from './store';
import { MyreduxComponent } from './myredux/myredux.component';
//comment above lines if you want to run without redux
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { PgHomeComponent } from './pg-home/pg-home.component';
import { PgLoginComponent } from './pg-login/pg-login.component';
import { PgMenuComponent } from './pg-menu/pg-menu.component';
import { PgHeaderComponent } from './pg-header/pg-header.component';
import { PgCategoryComponent } from './pg-category/pg-category.component';
import { PgProductcardComponent } from './pg-productcard/pg-productcard.component';
import { PgCategoryhomeComponent } from './pg-categoryhome/pg-categoryhome.component';
import { PgPageheaderComponent } from './pg-pageheader/pg-pageheader.component';
import { PgProductcatalogueComponent } from './pg-productcatalogue/pg-productcatalogue.component';
import { PostsComponent } from './posts/posts.component';

import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { PgTreeComponent } from './pg-tree/pg-tree.component';
import { PgTreeLangComponent } from './pg-tree-lang/pg-tree-lang.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    PgHomeComponent,
    
    PgLoginComponent,
    PgMenuComponent,
    PgHeaderComponent,
    PgCategoryComponent,
    PgProductcardComponent,
    PgCategoryhomeComponent,
    PgPageheaderComponent,
    PgProductcatalogueComponent,
    PostsComponent,
    LoginComponent,
    MyreduxComponent,
    PgTreeComponent,
    PgTreeLangComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: '',
        component: CoursesComponent
      },
      {
        path: 'Posts',
        component: PostsComponent
      },
      {
        path: 'Login',
        component: PgLoginComponent
      },
      {
        path: 'Category',
        component: PgCategoryComponent
      },{
        path: 'ProductCard',
        component: PgProductcardComponent
      },
      {
        path: 'Categoryhome',
        component: PgCategoryhomeComponent
      },
      {
        path: 'Redux',
        component: MyreduxComponent
      }
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    PostService,
    { 
      provide : ErrorHandler, 
      useClass: AppErrorHandler 
    }
  ],
  bootstrap: [AppComponent]
})
// export class AppModule { }

//comment below lines to run without redux
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState> ){
    ngRedux.configureStore(rootReducer, INITIAL_STATE)
  }
}
