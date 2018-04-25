import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Tintri} from './tintri'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class TintriService {

private _url: string = "/assets/data/tintri.json";

  constructor(private http:HttpClient) { }

getData():Observable<Tintri[]>{
return this.http.get<Tintri[]>(this._url)
                  .catch(this.errorHandler)
}
errorHandler(error:HttpErrorResponse){
  return Observable.throw(error.message || "Server Error")
}
}