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
var core_1 = require('@angular/core');
var customer_1 = require('../services/customer');
var customer_service_1 = require('../services/customer.service');
var router_1 = require('@angular/router');
// angular2 cookie
var core_2 = require('angular2-cookie/core');
var LoginComponent = (function () {
    function LoginComponent(customerService, router, cookieService) {
        this.customerService = customerService;
        this.router = router;
        this.cookieService = cookieService;
        console.log('LoginComponent running....');
        this.model = new customer_1.Customer(0, '', '', '', '');
    }
    LoginComponent.prototype.onSubmit = function () {
        // this.customerService.add(this.model).subscribe(response => this.modelResponse = response, error =>  this.errorMessage = <any>error);
        // console.log('customer = '+ this.modelResponse );
        /*   if(this.modelResponse == undefined){
                console.log('erro = '+this.errorMessage );
                this.router.navigate(['/home']);
           }   else{
                console.log('cadastro ok');
           }
        */
        /* Set Cokkie */
        this.cookieService.put('currentUser', 'userTest');
        this.router.navigate(['/home']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/pages/login.html'
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService, router_1.Router, core_2.CookieService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map