import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import {MatListModule} from '@angular/material';
import { AgmCoreModule } from '@agm/core';


import {
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { CreateTrackerComponent } from './create-tracker/create-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateTrackerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,MatFormFieldModule,MatInputModule,FormsModule, ReactiveFormsModule,
    MatCheckboxModule,
    AngularFireAuthModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,routes,
    AngularFireAuthModule,
   AngularFireModule.initializeApp(environment.firebase),MatListModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxt2mNYQ0DgtdCqUs-PVZkAX3VxL_GdLg'
    })
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
