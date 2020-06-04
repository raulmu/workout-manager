import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationEnd } from '@angular/router';

// declare let gtag: Function;
// declare ga as a function to set and sent the events
declare let ga: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router
  ) {
    this.initializeApp();
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     gtag('config', 'UA-151224500-1',
    //       {
    //         'page_path': event.urlAfterRedirects
    //       }
    //     );
    //   }
    // });
    // subscribe to router events and send page views to Google Analytics
    this.router.events.subscribe(event => {
      if (ga && ga.loaded) {
        if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
        }
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
