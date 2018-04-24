import { Component, OnInit } from '@angular/core';
import { TintriService } from '../tintri.service';
import { HttpClient } from '@angular/common/http';
HttpClient
@Component({
  selector: 'app-web',
  template: `
  <html>
  <div float="left">
  <table height="200" width="20%" border-style="solid" *ngFor="let data of tintri">
   <tr >
    <td colspan=2>
    <div class="error"><img width="20" src="{{data.src}}"> <b> {{data.status}} </b> </div>
      <div class="cvm"><b>{{data.name}}</b></div>
      <div class="bussiness"><b>{{data.description}}</b></div>
      <div class="grey"><b>{{data.path}}</b></div>
    </td>
    </tr>
    <tr >
      <td>
        <div class="vm"><b>VMs</b></div> 
        <div class="vmno"><b>{{data.number}}</b></div>
      </td>
       <td>
        <div class="error"><b>ERROR</b></div>
        <div class ="errorno"><b>{{data.error}}</b></div>
        </td>
    </tr>
    </table>  
    </div>        
  <html>
  `,
  styles: []
})
export class WebComponent implements OnInit {
public tintri = [];
  constructor(private Tintri:TintriService) { }

  ngOnInit() {
    this.Tintri.getData()
    .subscribe(data =>this.tintri = data);
  }

}
