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



@NgModule({
  declarations: [
    AdminServicesComponent,
    AddServiceComponent,
    ViewServicesComponent,
    UpdateServicesComponent,
    BookingsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class AdminModule { }
