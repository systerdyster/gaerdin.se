import { Component } from '@angular/core';

import { NavComponent } from "../nav/nav.component";

@Component({
    selector: 'body',
    templateUrl: './Static/src/ts/components/app/app.template.html',
    directives: [NavComponent]
})

export class AppComponent {
}
