import {Component, Attribute} from '@angular/core'

@Component({
  selector: 'time',
  template: `
      {{date}}
    `
})
export class Now {
   private date;
   private format;
   
  constructor(@Attribute("format") format) { 
    this.format=format;
    this.date =  new Date(); 
    
    setInterval(() => {
        this.date =  new Date().toUTCString();
     }, 1000);
  } 

} 