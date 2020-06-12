import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://www.deutsche-familienversicherung.de/fileadmin/media/fake/api2/api.php';
  
  constructor(private http: HttpClient) { }

  
  
  login(logindata) {
    const param = new HttpParams().set('query', logindata.query).set('dfvVnr', logindata.dfvVnr).set('vnGeb', logindata.vnGeb);
    return this.http.get(this.baseUrl, { params: param });
  }

  register(vnr, productId) {
    //const param = new HttpParams().set('query', 'submitChoice').set('dfvVnr', vnr).set('product', productId);
    return this.http.post('http://localhost/post/register', { query: 'submitChoice', dfvVnr: vnr, product: productId });
  }

}
