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




@NgModule({
  declarations: [
    AdminServicesComponent,
    AddServiceComponent,
    ViewServicesComponent
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
