import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vanessa H. Sagolili';
  isDisabled = false;
  inputValue = "";
  numberValue = 0;

  sampleButton(){
    console.log(this.inputValue)
  };

  increaseValue(){
    this.numberValue++
    this.inputValue = this.numberValue.toString()
  };

  receiveEvent(){
    console.log("test in app component.")
  }
};
