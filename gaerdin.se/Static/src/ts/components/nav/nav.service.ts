import { Injectable } from '@angular/core';
import { NavItem } from "./nav.model";


@Injectable()

export class NavService {
    links: Array<NavItem>;

    constructor() {
        this.links = <NavItem[]>[
            {
                id: 1,
                link: "http://gaerdin.local",
                title: "Gaerdin.local"
            },
            { id: 2, link: "http://www.google.com", title: "Google" }];
    }

    getLinks() {
        return this.links;
    };
}