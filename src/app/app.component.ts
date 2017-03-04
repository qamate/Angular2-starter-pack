import {Component} from "@angular/core";
import { TableComponent } from 'angular2-datagrid/src/app/demo';

@Component({
    selector:"my-app",
    template:`<nav-menu></nav-menu><router-outlet></router-outlet><right-content></right-content>`

})
export class AppComponent{
private date;
   private format;
   
  constructor() { 
    this.format="somedate";
    this.date =  new Date();
  } 

}
