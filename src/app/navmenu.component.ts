import { Component } from '@angular/core';

@Component({
    selector: 'nav-menu',
    templateUrl: 'navmenu.component.html'
})
export class NavMenuComponent {
    public routing: RouteTables[] = [{ routeKey: 'aboutme', routeValue: 'About Me' }];

}

interface RouteTables {
    routeKey: string;
    routeValue: string;
}