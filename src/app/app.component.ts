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
  title = 'Angular 3rd Activity (Pelingon & Sagolili)';
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
    lastName: "Sagolili",
    firstName: "Vanessa",
    age:21,
    nationality: "Filipino",
    address: "Mahanay, Talibon, Bohol",
    sex: 'Female',
    status: "Single",
    elementary: "Mahanay Elementary School",
    highSchool: "San Jose National High School",
    college: "University of San Carlos",
    degree: "Certificate in Computer Technology"
  },
  {
    id:1,
    lastName: "Omne Jean",
    firstName: "Pelingon",
    age:21,
    nationality: "Filipino",
    address: "Calatrava, Negros Occidental",
    sex: 'Female',
    status: 'Single',
    elementary: " Calatrava II Central School",
    highSchool: "Calatrava Senior High School",
    college: "University of San Carlos",
    degree: "Certificate in Computer Technology"
  },
  {
    id:2,
    lastName: "Doe ",
    firstName: "John",
    age:28,
    nationality: "American",
    address: "California",
    sex: 'Male',
    status: "Married",
    elementary: "California Primary School",
    highSchool: "California High School",
    college: "",
    degree: ""

  }]
};
