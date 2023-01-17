import { Component, Input } from '@angular/core';
//butang ug import gikan sa student interface
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
// the exclamation mark(!) is to identify that we are just creating a (IDK) heheef.
export class StudentComponent {
  @Input() studentIn!: Student
}
