import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home, .app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  @Input() designation: string = "fresher"
  @Input() title: string = "HOME title";
  

// isLoaded = false;

// constructor(){
//   console.log("home component constructor")
//  }

// ngOnInit() : void{
//   this.isLoaded = true;
//   console.log("home component constructor")
// }

name:string = "ABC";
age: number = 0;

getData(){
  const data = this.getUserDetail();
  this.name = data.name;
  this.age = data.age;
}

getUserDetail(){
  return {name:"Harshit Jain", age:22};
}
}
