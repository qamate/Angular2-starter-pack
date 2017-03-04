import {Component} from "@angular/core";
@Component({
    templateUrl:"creatingwebpackangular2.html"

})
export class Webpack2Component{
public routing: RouteTables[] = [{ routeKey: '../home', routeValue: 'Take Me Home' }];

}

interface RouteTables {
    routeKey: string;
    routeValue: string;
}
