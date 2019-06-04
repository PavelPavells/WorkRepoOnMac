import { Component } from '@angular/core';

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName = 'Pavel';
  lastName: string;
  age: number;
  status:boolean;
  posts: object[];
  constructor() {
    console.log('constructor...!');
    this.posts = [
      {title: 'Post1'},
      {title: 'Post2'},
      {title: 'Post3'},
      {title: 'Post4'},
      {title: 'Post5'},
    ]
  }
  displayName() {
    return this.firstName + this.lastName
  }
  getUserStatus() {
    return this.status = true
  }
  greetPerson() {
    alert('Hi!');
  }
}
