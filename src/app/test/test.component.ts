import { Component } from '@angular/core';

@Component({
  selector: '[app-test]',
  standalone: true,
  imports: [],
  // templateUrl: './test.component.html',
  // template: '<div>Inline tmplate</div>',
  template: `<div>
  Inline tmplate
  </div>`,
  // styleUrls: ['./test.component.css']
  // styleUrl: './test.component.css'
  styles:[`div{
    color:red;
  }`]
})
export class TestComponent {

}
