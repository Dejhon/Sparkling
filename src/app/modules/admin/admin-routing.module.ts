import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddServiceComponent } from '../components/add-service/add-service.component';
import { BookingsComponent } from '../components/bookings/bookings.component';
import { MessageComponent } from '../components/message/message.component';
import { UpdateBookingsComponent } from '../components/update-bookings/update-bookings.component';
import { UpdateMessageComponent } from '../components/update-message/update-message.component';
import { UpdateServicesComponent } from '../components/update-services/update-services.component';
import { ViewAssessmentsComponent } from '../components/view-assessments/view-assessments.component';
import { ViewServicesComponent } from '../components/view-services/view-services.component';

const routes: Routes = [
    {path: '', redirectTo: '/profile/home', pathMatch: 'full'},
    {path:'home', component:BookingsComponent},
    {path:'bookings', component:BookingsComponent},
    {path:'view-services', component: ViewServicesComponent},
    {path:'addService', component:AddServiceComponent},
    {path:'updateServices/:id', component:UpdateServicesComponent},
    {path:'assessments', component:ViewAssessmentsComponent},
    {path:'updateBookings/:id', component:UpdateBookingsComponent},
    {path:'messages', component:MessageComponent},
    {path:'updateMessages/:id', component:UpdateMessageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
