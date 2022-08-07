import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AssesmentComponent } from './Components/assesment/assesment.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactComponent } from './Components/contact/contact.component';
import { ServicesOfferedComponent } from './Components/services-offered/services-offered.component';
import { BookingComponent } from './Components/booking/booking.component';
import { CompanyProfileComponent } from './Components/company-profile/company-profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './Components/login/login.component';
import { AuthService } from './Services/auth.service';
import { AuthGuard } from './Guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AssesmentComponent,
    ContactComponent,
    ServicesOfferedComponent,
    BookingComponent,
    CompanyProfileComponent,
    LoginComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
