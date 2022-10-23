import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiswaComponent } from './siswa/siswa.component';
import { GuruComponent } from './guru/guru.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    SiswaComponent,
    GuruComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
