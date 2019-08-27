import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


import { HttpRequest, HttpResponse } from '@angular/common/http';
import { IUrlOptions } from './searchbar/searchbar.model';
import { RequestTypes } from './searchbar/searchbar.model';


@Injectable({
  providedIn: 'root'
})
export class ResdataService {
  
  constructor(private host: string,
    private http: HttpClient) { }
  
    private constructUrl(urlOptions: IUrlOptions): string {
      return this.host + urlOptions.restOfUrl;
  }

//T specifies a generic output of function
public Request<T>(requestType: RequestTypes, urlOptions: IUrlOptions, body?: any, options?: HttpRequest<T>) : Observable<Response> {
  let response: Observable<Response>;
  //True in case of post, put and patch
  if (body && options) {
      response = this.http[RequestTypes[requestType]](
          this.constructUrl(urlOptions), 
          body, 
          options);
  }
  //True in case of post, put and patch if options is empty
  else if (body) {
      response = this.http[RequestTypes[requestType]](
          this.constructUrl(urlOptions),
          body);
  }
  //True in case of get, delete, head and options
  else if (options) {
      response = this.http[RequestTypes[requestType]](
          this.constructUrl(urlOptions),
          options);
  }
  //True in case of get, delete, head and options, if options is empty
  else {
      response = this.http[RequestTypes[requestType]](
          this.constructUrl(urlOptions),
          options);
  }
 console.log(response);
  return response;
}
  
}

