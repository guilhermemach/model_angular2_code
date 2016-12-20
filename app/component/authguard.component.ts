import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private cookieServer : CookieService) { }

    canActivate() {

        if (this.cookieServer.get('currentUser')) {
            console.log(this.cookieServer.get('currentUser'))
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}
