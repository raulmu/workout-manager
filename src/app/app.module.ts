import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddPage } from './pages/add/add.page';
import { AddPageModule } from './pages/add/add.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { GoogleAnalyticsService } from './services/google-analytics.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [AddPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AddPageModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleAnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
