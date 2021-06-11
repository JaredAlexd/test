import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomneComponent } from './homne/homne.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
//import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomneComponent,
    UsersComponent,
    LoginComponent
    //ContactComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
