import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css'],
})
export class ListCustomersComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  public addNewCustomerForm!: FormGroup;

  customerResult: any;
  customerList: any;
  ngOnInit() {
    this.addNewCustomerForm = new FormGroup({
      _id: new FormControl(),
      firstName: new FormControl(),
      emailAddress: new FormControl(),
      phoneNumber: new FormControl(),
      dob: new FormControl(),
      department: new FormControl(),
    });

    this.getCustomerList();
  }

  getCustomerList() {
    this.customerService.getCustomers().subscribe((data: any) => {
      this.customerResult = data;
      this.customerList = this.customerResult.results;
    });
  }

  onSubmit() {}
}
