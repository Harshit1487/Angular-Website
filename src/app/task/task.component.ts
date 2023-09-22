import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent {
  product:any = [
    {
      productId:0,
      name:"Acer",
      price:80000,
      quantity:10
    },
    {
      productId:0,
      name:"Dell",
      price:60000,
      quantity:5
    },
    {
      productId:0,
      name:"Lenovo",
      price:50000,
      quantity:15
    },
    {
      productId:0,
      name:"HP",
      price:55000,
      quantity:20
    }
  ]
}
