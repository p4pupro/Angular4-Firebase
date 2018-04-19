import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDHRkzWybvI_60uoY8PUZMqhEyvLhdwDq4",
      authDomain: "appcompras-be0f7.firebaseapp.com",
      databaseURL: "https://appcompras-be0f7.firebaseio.com",
      projectId: "appcompras-be0f7",
      storageBucket: "appcompras-be0f7.appspot.com",
      messagingSenderId: "1050838967922"
    })
  }
}
