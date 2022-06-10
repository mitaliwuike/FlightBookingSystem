import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightBookingComponent } from './component/flight-booking/flight-booking.component';
import { FlightSearchComponent } from './component/flight-search/flight-search.component';
import { LoginComponent } from './component/login/login.component';
import { PassangerDetailsComponent } from './component/passanger-details/passanger-details.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'passanger-details', component: PassangerDetailsComponent
  },
  {
    path: 'flight-search', component: FlightSearchComponent
  },
  {
    path: 'flight-search/flight-booking', component: FlightBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
