import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  template:`
            <h2>{{"Hello " + name}}</h2>
            <!-- Create a button to fire the event -->
            <button (click)="fireEvent()">Send Event</button>
  
  `,
  
  // styleUrls: ['./test.component.css']
  // styleUrl: './test.component.css'
  styles:[`div{
    color:red;
  }`]
})
export class TestComponent implements OnInit {


  // the same parentData which app.component.html is sending and is displayed by child test component
  // @Input() public parentData: any;

  @Input('parentData') public name: any;

  // Create an event and include the @Output() decorator
  @Output() public childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit('Hey Codevolution')
    }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
