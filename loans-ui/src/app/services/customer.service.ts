import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  // METHODS to communicate with backend APIS

  getCustomers() {
    let url =
      environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_ALL_CUSTOMERS;
    return this.http.get(url);
  }

  // viewCustomers(id: string) {
  //   let url =
  //     environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_CUSTOMER;
  //   return this.http.get(url);
  // }

  viewCustomers(id: string) {
    let url =
      environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_CUSTOMER+`?userId=${id}`;
    return this.http.get(url);
  }

  editCustomers(id: string, customerObj: any) {}

  deleteCustomers(id: string) {}

  searchCustomer(keyword: any) {}
}
