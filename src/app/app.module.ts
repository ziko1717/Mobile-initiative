import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from 'src/app/login/login.component';
import { ProfilComponent } from 'src/app/profil/profil.component'
import { DataServiceService }  from 'src/app/data-service.service';
import { RegisterComponent } from 'src/app/register/register.component';


import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent,LoginComponent,ProfilComponent,RegisterComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule, BrowserAnimationsModule,MatToolbarModule,MatCardModule,MatFormFieldModule,MatInputModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
