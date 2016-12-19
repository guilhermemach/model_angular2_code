import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../services/customer';
import { GenericComponent } from '../component/generic.component';

@Component({
  templateUrl: 'app/pages/group1.html'
})
export class Group1Component extends GenericComponent {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {
    super();
    console.log('Group1Component cached...');    
  }

  getAllCustomers() {
    this.loading = true;
    this.errorMessage = null;
    console.log('getAllCustomers()... inicio');
    this.customerService.getAll().subscribe(
      data => { this.customers = data },
      err => { this.errorMessage = "Erro de comunicação com o servidor!", console.error(err), this.loading = false },
      () => this.loading = false
    );
    console.log(this.customers);
    console.log('getAllCustomers()... fim');
  }

  cleanCustomersList() {
    this.customers = [];
  }
}
