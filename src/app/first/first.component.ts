import { Component, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Post } from '../post';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  // @Input() firstInput: number = 0;

  // getFirstInput(){
  //   console.log(this.firstInput);
  // }

  posts!: Post[]
  constructor(private httpService: HttpService){}

  ngOnInit(){
    // console.log('first component')
    this.httpService.getData('https://jsonplaceholder.typicode.com/posts')
    .subscribe(data => {
      // console.table(data);
      this.posts = data as Post[]
    })
  }
}
