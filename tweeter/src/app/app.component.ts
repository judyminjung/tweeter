import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    console.log('we are initialized', firebase);
    const firebaseConfig = {
      apiKey: "AIzaSyBGexTBRAsHreZFnArmZzkg6WQfAGk9ugA",
      authDomain: "tweeter-aa0e0.firebaseapp.com",
      databaseURL: "https://tweeter-aa0e0.firebaseio.com",
      projectId: "tweeter-aa0e0",
      storageBucket: "tweeter-aa0e0.appspot.com",
      messagingSenderId: "982651571138",
      appId: "1:982651571138:web:e8bd55bb4f1daa9bab245b",
      measurementId: "G-GFN9TGRHR7"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.database().ref('/test').set('hello world').then(console.log).catch(console.error);
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
