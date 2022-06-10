import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { SlideComponent } from './component/slide/slide.component';
import { MenuComponent } from './component/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlightSearchComponent } from './component/flight-search/flight-search.component';
import { PassangerDetailsComponent } from './component/passanger-details/passanger-details.component';
import { FooterComponent } from './component/footer/footer.component';
import { ApiService } from './shared/api.service';
import { FlightBookingComponent } from './component/flight-booking/flight-booking.component';
import { OriginsPipe } from './Pipes/origins.pipe';
import { ShortenPipe } from './Pipes/shorten.pipe';
import { DestinationPipe } from './Pipes/destination.pipe';
import { DateTimePipe } from './Pipes/date-time.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    SlideComponent,
    MenuComponent,
    FlightSearchComponent,
    PassangerDetailsComponent,
    FooterComponent,
    FlightBookingComponent,
    ShortenPipe,
    OriginsPipe,
    DestinationPipe,
    DateTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
