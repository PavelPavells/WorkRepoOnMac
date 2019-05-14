import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName: string = 'Pavel';
  lastName: string;
  status: boolean;
  posts: object[];

  constructor() {
    console.log('constructor....!');
    this.lastName = 'Smirnov';
    this.getUserStatus();
    //this.greetStatus();
    this.posts = [
      {title: 'post1'},
      {title: 'post2'},
      {title: 'post3'},
      {title: 'post4'},
      {title: 'post5'}
    ]
  }
  displayFirstName() {
    return this.firstName
  }
  getUserStatus() {
    this.status = true;
  }
  greetPerson() {
    alert('HI');
  }

}
