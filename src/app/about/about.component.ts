import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @Input() designation: string = "fresher";
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
