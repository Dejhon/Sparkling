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
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './Components/contact/contact.component';
import { ReviewsService } from './Services/reviews.service';
import { ServicesOfferedComponent } from './Components/services-offered/services-offered.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AssesmentComponent,
    ContactComponent,
    ServicesOfferedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ReviewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
