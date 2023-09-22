import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';//property
  contactTitle:string = "contact title from app";
  onUpdate(data:any){
    this.contactTitle = data;
  }

}
