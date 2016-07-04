"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const nav_service_1 = require("./nav.service");
let NavComponent = class NavComponent {
    constructor($navService) {
        this.$navService = $navService;
        this.links = $navService.getLinks();
    }
};
NavComponent = __decorate([
    core_1.Component({
        selector: 'g-nav',
        templateUrl: './Static/src/ts/components/nav/nav.template.html',
        providers: [nav_service_1.NavService]
    }), 
    __metadata('design:paramtypes', [nav_service_1.NavService])
], NavComponent);
exports.NavComponent = NavComponent;

//# sourceMappingURL=nav.component.js.map
