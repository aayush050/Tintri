import { Component, OnInit } from '@angular/core';
import { TintriService } from '../tintri.service';
import { HttpClient } from '@angular/common/http';
HttpClient
@Component({
  selector: 'app-web',
  template: `
  <html>
  <h1>{{errorMessage}}</h1>
  <table border="0" height="200" width="20%"  *ngFor="let data of tintri">
   <tr >
    <td colspan=2>
    <div class="status"><img width="15" src="{{data.src}}"> <b> {{data.status}} </b> <img align ="right"  width = "30" src="http://2.bp.blogspot.com/_t2t0TocmM7M/STBhJF6P4-I/AAAAAAAAE3A/dnG7EPdL3Rw/s400/centerellipsis_l.gif"></div>
      <div class="name"><b>{{data.name}}</b></div>
      <div class="description"><b>{{data.description}}</b></div>
      <div class="path"><b>{{data.path}}</b></div>
    </td>
    </tr>
    <tr >
      <td class = "vmborder">
        <div class="vm"><b>VMs</b></div> 
        <div class="vmcount"><b>{{data.number}}</b></div>
      </td>
       <td class="errorborder">
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
public tintri:any=[];
public errorMessage;
  constructor(private Tintri:TintriService) { }

  ngOnInit() {
    this.Tintri.getConfig()
    .subscribe(data =>this.tintri = data,
                    error => this.errorMessage = error);
    //this.tintri = this.Tintri.getConfig();
  }

}
