import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';
import{LeftComponent} from './app/blog-inner-elements/left-section/leftcontent'
import { AboutComponent } from './app/blog-inner-elements/aboutme';
import{Webpack2Component} from './app/blog-inner-elements/webpacksang2';


export const router: Routes = [
    {
    path: 'home',
    component: LeftComponent,
  },
    { path: '',
    redirectTo: '/home',
         pathMatch: 'full'
   },
    { path: 'aboutme', component: AboutComponent },
    { path: 'creating-webpack-in-angular2-01', component: Webpack2Component }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });