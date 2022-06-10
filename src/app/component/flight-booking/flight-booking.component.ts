import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { Booking } from 'src/app/shared/Model/Booking.model';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {
  public BookingForm !: FormGroup
  public booking = new Booking();
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,private api : ApiService) { }

 ngOnInit(): void {
   this.BookingForm = this.formBuilder.group({
    FlightId : [''],
    FirstName: [''],
    LastName: [''],
    Email: [''],
    Contact: ['']

   }),
     this.BookingForm = new FormGroup({
      FlightId: new FormControl('', Validators.required),
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required]),
      Contact: new FormControl('', [Validators.required])

     })
 }
 Booking() {
   this.booking.FBS_Flight_Id = this.BookingForm.value.FlightId;
   this.booking.Cust_First_Name = this.BookingForm.value.FirstName;
   this.booking.Cust_Last_Name = this.BookingForm.value.LastName;
   this.booking.Cust_EmailId = this.BookingForm.value.Email;
   this.booking.Cust_Contact_No = this.BookingForm.value.Contact;

   this.api.addPassanger(this.booking)
   .subscribe(res =>{
     alert(res.message);
     this.router.navigate(['']);
   })
 }
 get FlightIdValidator(){
  return this.BookingForm.get('FlightId');
 }
 get FirstValidator() {
   return this.BookingForm.get('FirstName');
 }
 get LastNameValidator() {
   return this.BookingForm.get('LastName');
 }
 get EmailValidator() {
   return this.BookingForm.get('Email');
 }
 get ContactValidator() {
  return this.BookingForm.get('Contact');
}
  
}
