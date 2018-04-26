import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Tintri } from './tintri'
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
@Injectable()
export class TintriService {

  public data:any;
  private _url: string = 'http://192.168.106.141:8083';
  private parseData(res: Response) {
    return res.json() || [];
  }
  constructor(private http: HttpClient) { }

  //public getData(): Observable<Tintri[]> {
    //eturn this.http
     // .get(this._url + '/user')
     // .catch(this.errorHandler);
  //}

  getConfig(): Observable<Tintri[]> { 
    this.data=this.http.get('http://192.168.106.141:8083/user');
    console.log("data",this.data)
    return this.data.catch(this.errorHandler);
  }


  private extractData(res: Response) {
    return res.json() || [];
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error")
  }

}