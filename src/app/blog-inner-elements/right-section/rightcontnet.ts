import {Component} from "@angular/core";
import { Http } from '@angular/http';

@Component({
    selector:"right-content",
    templateUrl:"right-content.html"

})
export class RightComponent{
public res:Response[];
public date:Date;

constructor(http: Http) {
        http.get('data.json').subscribe(result => {
            this.res = result.json();
        });
        this.date =  new Date(); 
    }

}

interface Response
{
Tag:string;
SubTag:string;
TopicId:string;
TopicName:string;
TopicUrl:string;
TopicDescription:string;
PublishedDate:string;
}
