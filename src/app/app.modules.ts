// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { Now } from './app.time.component';
import { HttpModule } from '@angular/http';
import{LeftComponent} from './blog-inner-elements/left-section/leftcontent';
import{RightComponent} from './blog-inner-elements/right-section/rightcontnet';
import{AboutComponent} from './blog-inner-elements/aboutme';
import { routes } from '../app.router';
import{NavMenuComponent} from './navmenu.component';
import{Webpack2Component} from './blog-inner-elements/webpacksang2';


const appRoutes: Routes = [
  { path: 'aboutme', component: AboutComponent },
  { path: 'home', component: LeftComponent },
  { path: 'creating-webpack-in-angular2-01', component: Webpack2Component }
];

@NgModule({
  declarations: [
    AppComponent,Now,LeftComponent,RightComponent,AboutComponent,NavMenuComponent,Webpack2Component
  ],
  bootstrap: [
    AppComponent,Now
  ],
  imports: [
    RouterModule.forRoot(appRoutes),BrowserModule,HttpModule,routes 
  ]
})
export class AppModule {}
