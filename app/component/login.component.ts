import { Component} from '@angular/core';
import { Customer } from '../services/customer';
import { CustomerService } from '../services/customer.service';
import { Router} from '@angular/router';
// angular2 cookie
import {CookieService} from 'angular2-cookie/core';

@Component({
  templateUrl : 'app/pages/login.html'
})
export class LoginComponent {

  model : Customer;
  modelResponse : Customer;
  errorMessage : any;

  constructor(private customerService : CustomerService, private router: Router, private cookieService:CookieService){
    console.log('LoginComponent running....');
    this.model = new Customer(0,'','','','');
  }

  onSubmit() {
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
    this.cookieService.put('currentUser','userTest')
    this.router.navigate(['/home']);
  }
}
