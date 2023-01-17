import { Component, Input } from '@angular/core';
//butang ug import gikan sa student interface
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() studentIn!: Student
}
