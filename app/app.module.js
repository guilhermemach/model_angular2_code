"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var home_component_1 = require("./component/home.component");
var group1_component_1 = require("./component/group1.component");
var index_component_1 = require("./component/index.component");
var login_component_1 = require("./component/login.component");
var authguard_component_1 = require("./component/authguard.component");
var http_1 = require("@angular/http");
var customer_service_1 = require("./services/customer.service");
var core_2 = require("angular2-cookie/core");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot([
                { path: '', component: home_component_1.HomeComponent, canActivate: [authguard_component_1.AuthGuard] },
                { path: 'home', component: home_component_1.HomeComponent, canActivate: [authguard_component_1.AuthGuard] },
                { path: 'group1', component: group1_component_1.Group1Component, canActivate: [authguard_component_1.AuthGuard] },
                { path: 'login', component: login_component_1.LoginComponent }
            ]),
        ],
        declarations: [home_component_1.HomeComponent, group1_component_1.Group1Component, index_component_1.IndexComponent, login_component_1.LoginComponent],
        providers: [authguard_component_1.AuthGuard, customer_service_1.CustomerService, core_2.CookieService],
        bootstrap: [index_component_1.IndexComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map