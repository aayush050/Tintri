import { Component, OnInit } from '@angular/core';
import { TintriService } from '../tintri.service';
import { HttpClient } from '@angular/common/http';
HttpClient
@Component({
  selector: 'app-web',
  template: `
  <html>
  <h1>{{errorMessage}}</h1>
  <table height="200" width="20%" border-style="solid" *ngFor="let data of tintri">
   <tr >
    <td colspan=2>
    <div class="status"><img width="20" src="{{data.src}}"> <b> {{data.status}} </b> </div>
      <div class="name"><b>{{data.name}}</b></div>
      <div class="description"><b>{{data.description}}</b></div>
      <div class="path"><b>{{data.path}}</b></div>
    </td>
    </tr>
    <tr >
      <td>
        <div class="vm"><b>VMs</b></div> 
        <div class="vmcount"><b>{{data.number}}</b></div>
      </td>
       <td>
        <div class="error"><b>ERROR</b></div>
        <div class ="errorcount"><b>{{data.error}}</b></div>
        </td>
    </tr>
    </table>  
        
  <html>
  `,
  styles: []
})
export class WebComponent implements OnInit {
public tintri = [];
public errorMessage;
  constructor(private Tintri:TintriService) { }

  ngOnInit() {
    this.Tintri.getData()
    .subscribe(data =>this.tintri = data,
                    error => this.errorMessage = error);
  }

}
