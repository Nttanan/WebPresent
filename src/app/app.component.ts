import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'born2bdev';
  linkToFastwork(){
    window.location.href = 'https://fastwork.co/user/born2bdev';
  }
}
