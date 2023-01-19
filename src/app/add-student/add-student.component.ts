import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent {
  ngOnInit(){
    this.studentForm.reset();
  }
  @Output() studentOut = new EventEmitter();
  //to create a variable to define the formGroup
  studentForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(0),
    sex: new FormControl(''),
    nationality: new FormControl(''),
    degree: new FormControl('')
  })

  addStudent(){
    // console.log(this.studentForm.value)
    this.studentOut.emit(this.studentForm.value)
    // this.studentForm.reset();
  }
}
