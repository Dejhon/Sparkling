import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { ServicesOfferedComponent } from './Components/services-offered/services-offered.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},  
  { path: 'contactUs', component: ContactComponent},  
  { path: 'services', component: ServicesOfferedComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
