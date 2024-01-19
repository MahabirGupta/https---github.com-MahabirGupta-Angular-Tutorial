import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  template:`<h2>{{"Hello " + parentData}}</h2>`,
  
  // styleUrls: ['./test.component.css']
  // styleUrl: './test.component.css'
  styles:[`div{
    color:red;
  }`]
})
export class TestComponent implements OnInit {

  // the same parentData which app.component.html is sending
  @Input() public parentData: any;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
