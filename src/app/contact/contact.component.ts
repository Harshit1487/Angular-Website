import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() title: string = "Contact title";
  @Input() stext:string = "card short text";

  @Output() update = new EventEmitter();
  count:number = 0;
  isHide: boolean = true;

  onChange(){
    this.count++;
    this.update.emit(`hello from contact component.${this.count} times`);
    this.isHide = !this.isHide;
  }

  showContact: boolean = true;

  contactData:any = [
    {
      title:"card 1",
      stext: "card 1 s text"
    },
    {
      title:"card 2",
      stext: "card 2 s text"
    },
    {
      title:"card 3",
      stext: "card 3 s text"
    }
  ]
}
