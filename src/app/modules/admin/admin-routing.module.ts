import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddServiceComponent } from '../components/add-service/add-service.component';
// import { AdminServicesComponent } from '../components/admin-services/admin-services.component';
import { BookingsComponent } from '../components/bookings/bookings.component';
import { ViewServicesComponent } from '../components/view-services/view-services.component';

const routes: Routes = [
    {path: '', redirectTo: '/profile/home', pathMatch: 'full'},
    {path:'home', component:BookingsComponent},
    {path:'view-services', component: ViewServicesComponent},
    {path:'addService', component:AddServiceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
