import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
// added
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vanessa H. Sagolili';
  // isDisabled = false;
  // inputValue = "";
  // numberValue = 0;

  // sampleButton(){
  //   console.log(this.inputValue)
  // };

  // increaseValue(){
  //   this.numberValue++
  //   this.inputValue = this.numberValue.toString()
  // };

  // receiveEvent(){
  //   console.log("test in app component.")
  // }

  studentList:Student[] = [{
    id:0,
    lastName: "Vanessa",
    firstName: "Sagolili",
    age:21,
    nationality: "Filipino",
    address: "",
    sex: 'Female'
  },
  {
    id:1,
    lastName: "Omne Jean",
    firstName: "Pelingon",
    age:21,
    nationality: "Filipino",
    address: "Negros",
    sex: 'Female'
  },
  {
    id:2,
    lastName: "Jhon ",
    firstName: "Doe",
    age:28,
    nationality: "American",
    address: "California",
    sex: 'Male'
  }]
};
