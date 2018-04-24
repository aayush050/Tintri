import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Tintri} from './tintri'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TintriService {

private _url: string = "/assets/data/tintri.json";

  constructor(private http:HttpClient) { }




getData():Observable<Tintri[]>{
return this.http.get<Tintri[]>(this._url);
}
}