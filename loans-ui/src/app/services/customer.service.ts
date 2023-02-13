import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  // VARIABLEs to communicate with backend APIS
  customersUrl =
    environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_ALL_CUSTOMERS;
  customerDetails =
    environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_CUSTOMER;
  customerUpdate =
    environment.CUSTOMER_BASE_URL + environment.CUSTOMER.UPDATE_CUSTOMER;
  customerAdd =
    environment.CUSTOMER_BASE_URL + environment.CUSTOMER.ADD_CUSTOMER;

  // METHODS to communicate with backend APIS

  getCustomers() {
    return this.http.get(this.customersUrl);
  }

  getCustomerDetails(id: string) {
    return this.http.get(this.customerDetails + `?userId=${id}`);
  }

  updateCustomer(id: string, customerObj: any) {
    return this.http.put(this.customerUpdate + `?userId=${id}`, customerObj);
  }

  addCustomer() {
    return this.http.post(this.customerAdd, {});
  }

  deleteCustomers(id: string) {}

  searchCustomer(keyword: any) {}
}
