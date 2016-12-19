"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var customer_service_1 = require('../services/customer.service');
var generic_component_1 = require('../component/generic.component');
var Group1Component = (function (_super) {
    __extends(Group1Component, _super);
    function Group1Component(customerService) {
        _super.call(this);
        this.customerService = customerService;
        this.customers = [];
        console.log('Group1Component cached...');
    }
    Group1Component.prototype.getAllCustomers = function () {
        var _this = this;
        this.loading = true;
        this.errorMessage = null;
        console.log('getAllCustomers()... inicio');
        this.customerService.getAll().subscribe(function (data) { _this.customers = data; }, function (err) { _this.errorMessage = "Erro de comunicação com o servidor!", console.error(err), _this.loading = false; }, function () { return _this.loading = false; });
        console.log(this.customers);
        console.log('getAllCustomers()... fim');
    };
    Group1Component.prototype.cleanCustomersList = function () {
        this.customers = [];
    };
    Group1Component = __decorate([
        core_1.Component({
            templateUrl: 'app/pages/group1.html'
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], Group1Component);
    return Group1Component;
}(generic_component_1.GenericComponent));
exports.Group1Component = Group1Component;
//# sourceMappingURL=group1.component.js.map