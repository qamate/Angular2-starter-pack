import {Component} from "@angular/core";
@Component({
    templateUrl:"aboutme.html"

})
export class AboutComponent{
public routing: RouteTables[] = [{ routeKey: '../home', routeValue: 'Take Me Home' }];

}

interface RouteTables {
    routeKey: string;
    routeValue: string;
}
