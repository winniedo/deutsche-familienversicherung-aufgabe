import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public dataSource = new Subject<any>();
  public alldata = new Object();
  public dataSource$ = this.dataSource.asObservable();
  constructor(private http: HttpClient) { }
  baseUrl = 'https://www.deutsche-familienversicherung.de/fileadmin/media/fake/api2/api.php';


  login(logindata) {
    const param = new HttpParams().set('query', logindata.query).set('dfvVnr', logindata.dfvVnr).set('vnGeb', logindata.vnGeb);
    this.http.get(this.baseUrl, { params: param}).subscribe((data: any) => {
        console.log(data);
        this.alldata = data;
      },
      (error: HttpErrorResponse) => {
      });
    return this.http.get(this.baseUrl, { params: param});
  }



}
