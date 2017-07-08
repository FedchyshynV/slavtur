import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],

})
export class AppComponent {
  
  myData: Array<any>;

  constructor(private http:Http){
    this.http.get('https://jsonplaceholder.typicode.com/photos')
        .map(response => response.json())
        .subscribe(res => this.myData = res);
  }


}