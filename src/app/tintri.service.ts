import { Injectable } from '@angular/core';

@Injectable()
export class TintriService {

  constructor() { }


data=[
  {"src":"http://images.all-free-download.com/images/graphicthumb/green_globe_ok_tic_584.jpg","status":"OK","name":"First VM","description":"Bussiness VMs" , "path":"/tintri/first_VM", "number":10, "error":0},
  {"src":"https://cdn1.iconfinder.com/data/icons/color-bold-style/21/08-512.png","status":"ERROR","name":"Second VM","description":"Virtual VMs" , "path":"/tintri/second_VM", "number":15, "error":6},
  {"src":"http://images.all-free-download.com/images/graphicthumb/green_globe_ok_tic_584.jpg","status":"OK","name":"Third VM","description":"Critical VMs" , "path":"/tintri/third_VM", "number":8, "error":0},
  {"src":"http://images.all-free-download.com/images/graphicthumb/green_globe_ok_tic_584.jpg","status":"OK","name":"Fourth VM","description":"Logical VMs" , "path":"/tintri/fourth_VM", "number":20, "error":0},
  {"src":"http://images.all-free-download.com/images/graphicthumb/green_globe_ok_tic_584.jpg","status":"OK","name":"Fifth VM","description":"Physical VMs" , "path":"/tintri/fifth_VM", "number":20, "error":0},
  

]

getData()
{
return this.data;
}
}