import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interactive Calculator - Angular';
  answer: number = 0;
  num1 = '';
  num2 = '';
  result = false;
  
  getFirst(num1:any) {
    this.num1 = num1;
    console.log(num1);
    
    if(num1 === '')
      this.result = false;
  }

  getSecond(num2:any) {
    this.num2 = num2;
    console.log(num2);
    
    if(num2 === '') 
      this.result = false;
  }

  add () {
    this.answer = parseFloat(this.num1) + parseFloat(this.num2);
    this.validate(parseInt(this.num1), parseInt(this.num2));
  }

  subtract () {
    this.answer = parseFloat(this.num1) - parseFloat(this.num2);
    this.validate(parseInt(this.num1), parseInt(this.num2));
  }

  multiply () {
    this.answer = parseFloat(this.num1) * parseFloat(this.num2);
    this.validate(parseInt(this.num1), parseInt(this.num2));
  }

  divide () {
    this.answer = parseFloat(this.num1) / parseFloat(this.num2);
    this.validate(parseInt(this.num1), parseInt(this.num2));
  }

  validate (num1:any, num2:any) {
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please input a valid number!");
      this.result = false;
    }
    
    else {
      console.log(this.answer);
      this.result = true;
    }
  }
} 
