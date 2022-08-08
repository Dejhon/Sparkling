import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminServicesComponent } from '../components/admin-services/admin-services.component';
import { AddServiceComponent } from '../components/add-service/add-service.component';


@NgModule({
  declarations: [
    AdminServicesComponent,
    AddServiceComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
