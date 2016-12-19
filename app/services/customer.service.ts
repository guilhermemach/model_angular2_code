import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Customer } from '../services/customer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CustomerService{

  jsonString : string;

  constructor(private http : Http){
  }

  getAll(): Observable<Customer[]> {
    return this.http.get('http://localhost:8080/RestfullService/customer')
    .map((response: Response) => <Customer[]>response.json())
    .catch(this.handleError);
  }

  add(body: Object): Observable<Customer> {

      let bodyString = JSON.stringify(body); // Stringify payload
      let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); // Create a request option
  return this.http.post('http://localhost:8080/RestfullService/customer/add', bodyString).map((response: Response) => <Customer>response.json())
    .catch(this.handleError);    
  }

  private handleError (error: Response | any) {
   // In a real world app, we might use a remote logging infrastructure
   let errMsg: string;
   if (error instanceof Response) {
     const body = error.json() || '';
     const err = body.error || JSON.stringify(body);
     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
   } else {
     errMsg = error.message ? error.message : error.toString();
   }
   console.error('status = ' + errMsg);
   return Observable.throw(errMsg);
 }

}
