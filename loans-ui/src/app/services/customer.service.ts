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
  customerDetailsUrl =
    environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_CUSTOMER;
  customerUpdateUrl =
    environment.CUSTOMER_BASE_URL + environment.CUSTOMER.UPDATE_CUSTOMER;
  customerAddUrl =
    environment.CUSTOMER_BASE_URL + environment.CUSTOMER.ADD_CUSTOMER;
  customerDeleteUrl =
    environment.CUSTOMER_BASE_URL + environment.CUSTOMER.DELETE_CUSTOMER;

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
    return this.http.get(this.customerDetailsUrl + `?userId=${id}`);
  }

  updateCustomer(id: string, customerObj: any) {
    return this.http.put(this.customerUpdateUrl + `?userId=${id}`, customerObj);
  }

  addCustomer(customer: {
    _id: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    dob: Date;
    department: string;
  }) {
    this.http.post(this.customerAddUrl, customer).subscribe((res) => {
      console.log(res);
    });
  }

  deleteCustomer(id: string) {
    console.log("HEY... I'm the service!!!");
    return this.http
      .delete(this.customerDeleteUrl + `?userId=${id}`)
      .subscribe((res) => {
        console.log('The results are...', res);
      });
  }

  searchCustomer(keyword: any) {}
}
