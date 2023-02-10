import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css'],
})
export class ListCustomersComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  customerResult: any;
  customerList: any;
  ngOnInit() {
    this.getCustomerList();
  }

  getCustomerList() {
    this.customerService.getCustomers().subscribe((data: any) => {
      this.customerResult = data;
      this.customerList = this.customerResult.results;
    });
  }
}
