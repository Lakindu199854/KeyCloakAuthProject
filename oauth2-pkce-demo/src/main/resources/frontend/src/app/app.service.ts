import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient:HttpClient) { }

  /**
   * This Angular service sends a GET request to http://localhost:8080/api/home and expects plain text as
   * the response.
   *
   * It prepares the request with a Content-Type header saying "I'm expecting plain text", and
   * returns the result as something you can subscribe to (an Observable).
   */

  hello(): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.httpClient.get('http://localhost:8080/api/home', {
      headers,
      responseType: 'text'
    });
  }

}
