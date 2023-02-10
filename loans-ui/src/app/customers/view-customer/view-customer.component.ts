import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import {Subscription}  from "rxjs";

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
})
export class ViewCustomerComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  // subscription!: Subscription;
  customerId: string = '';
  customerDetails: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.customerId = data.id;
    });

    if(this.customerId){
      this.customerService
      .viewCustomers(this.customerId)
      .subscribe((data: any) => {
        this.customerDetails = data['results'];
      });
    }
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
