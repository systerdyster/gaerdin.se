import { NavItem } from "./nav.model";
import { Component } from '@angular/core';
import { NavService } from "./nav.service";

@Component({
    selector: 'g-nav',
    templateUrl: './Static/src/ts/components/nav/nav.template.html',
    providers: [NavService]
})

export class NavComponent {
    componentName: 'NavComponent';
    links: Array<NavItem>;

    constructor(private $navService: NavService) {
        this.links = $navService.getLinks();
    }
}