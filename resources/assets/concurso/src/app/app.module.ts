import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './pages/registration/registration.component';
import { FormComponent } from './components/form/form.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    FormComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
