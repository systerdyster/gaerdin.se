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
let NavService = class NavService {
    constructor() {
        this.links = [
            {
                id: 1,
                link: "http://gaerdin.local",
                title: "Gaerdin.local"
            },
            { id: 2, link: "http://www.google.com", title: "Google" }];
    }
    getLinks() {
        return this.links;
    }
    ;
};
NavService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], NavService);
exports.NavService = NavService;

//# sourceMappingURL=nav.service.js.map
