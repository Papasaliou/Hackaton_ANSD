import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GerantsComponent } from './gerants/gerants.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { DetailsLigneComponent } from './details-ligne/details-ligne.component';
import { ModerateurComponent } from './moderateur/moderateur.component';

@NgModule({
  declarations: [
    AppComponent,
    GerantsComponent,
    LoginComponent,
    DetailsLigneComponent,
    ModerateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
