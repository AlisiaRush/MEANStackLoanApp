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
      lastName: new FormControl(),
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

  onSubmit() {
    const options = {
      _id: this.addNewCustomerForm.get('_id')?.value,
      firstName: this.addNewCustomerForm.get('firstName')?.value,
      lastName: this.addNewCustomerForm.get('lastName')?.value,
      emailAddress: this.addNewCustomerForm.get('lastName')?.value,
      phoneNumber: this.addNewCustomerForm.get('lastName')?.value,
      dob: this.addNewCustomerForm.get('lastName')?.value,
      department: this.addNewCustomerForm.get('lastName')?.value,
    };
    this.customerService.addCustomer(options);
    console.log(this.addNewCustomerForm.value);
  }
}
