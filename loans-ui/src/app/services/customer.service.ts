import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
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

  // Error Handling
  /**
   * Handles errors sent back from the API.
   *
   * @param error HTTP error response
   * @returns observable with the response object returned from the server
   */
  private handleError(error: HttpErrorResponse): Observable<any> {
    return throwError(error);
  }

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

  // addCustomer(customerObj: any) {
  //   return this.http.post(this.customerAdd, {});
  // }

  // addCustomer(customerObj: any) {
  //   return this.http.post(this.customerAdd, { customerObj }).pipe(
  //     catchError((err) => this.handleError(err)),
  //     map((response) => response.body)
  //   );
  // }

  addCustomer(customer: {
    _id: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    dob: Date;
    department: string;
  }) {
    this.http.post(this.customerAdd, customer).subscribe((res) => {
      console.log(res);
    });
  }

  deleteCustomers(id: string) {}

  searchCustomer(keyword: any) {}
}
