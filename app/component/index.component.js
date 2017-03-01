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
var core_1 = require("@angular/core");
var $ = require('../js/jquery.min.js');
var IndexComponent = (function () {
    function IndexComponent(element) {
        this.element = element;
        console.log('IndexComponent running...');
    }
    /* Workaround */
    IndexComponent.prototype.ngAfterViewChecked = function () {
        var b = '';
        $('#nav a').each(function () {
            var $this = $(this), indent = Math.max(0, $this.parents('li').length - 1), href = $this.attr('href'), target = $this.attr('target');
            b = b +
                '<a routerlink=' + href + ' ng-reflect-router-link=' + href + ' ng-reflect-href="' + href + '"' +
                'class="link depth-' + indent + '"' +
                ((typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
                ((typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
                '>' +
                '<span class="indent-' + indent + '"></span>' +
                $this.text() +
                '</a>';
        });
        $('#navPanel nav').remove();
        $('#navPanel').append('<nav>' + b + '</nav>');
        $('.title').remove();
        $('#titleBar').append('<span class="title">Menu</span>');
    };
    ;
    return IndexComponent;
}());
IndexComponent = __decorate([
    core_1.Component({
        selector: 'index',
        templateUrl: 'app/pages/index.html'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], IndexComponent);
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map