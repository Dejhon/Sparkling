import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminServicesComponent } from '../components/admin-services/admin-services.component';
import { AddServiceComponent } from '../components/add-service/add-service.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewServicesComponent } from '../components/view-services/view-services.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateServicesComponent } from '../components/update-services/update-services.component';
import { BookingsComponent } from '../components/bookings/bookings.component';
import { ViewAssessmentsComponent } from '../components/view-assessments/view-assessments.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdateBookingsComponent } from '../components/update-bookings/update-bookings.component';
import { MessageComponent } from '../components/message/message.component';
import { UpdateMessageComponent } from '../components/update-message/update-message.component';


@NgModule({
  declarations: [
    AdminServicesComponent,
    AddServiceComponent,
    ViewServicesComponent,
    UpdateServicesComponent,
    BookingsComponent,
    ViewAssessmentsComponent,
    UpdateBookingsComponent,
    MessageComponent,
    UpdateMessageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule, 
    Ng2SearchPipeModule
  ]
})
export class AdminModule { }
