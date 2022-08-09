import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyProfileComponent } from './Components/booking/company-profile/company-profile.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ServicesOfferedComponent } from './Components/services-offered/services-offered.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},  
  { path: 'contactUs', component: ContactComponent},  
  { path: 'services', component: ServicesOfferedComponent},  
  { path: 'login', component: LoginComponent},  
  { path: 'profile', component: CompanyProfileComponent,canActivate:[AuthGuard],
    loadChildren:() => import('./modules/admin/admin.module').then((m) => m.AdminModule),
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
