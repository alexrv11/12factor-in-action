import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DashboardModule } from './dashboard/dashboard.module';

export const firebaseConfig = {
  apiKey: "AIzaSyAH059FXWmeFnOBQ2zdRr48hipwV-UVacc",
  authDomain: "orderfly-b4c6d.firebaseapp.com",
  databaseURL: "https://orderfly-b4c6d.firebaseio.com",
  projectId: "orderfly-b4c6d",
  storageBucket: "orderfly-b4c6d.appspot.com",
  messagingSenderId: "821061211175"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    DashboardModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

