import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

 import { ApiService } from '../../shared/api.service';
 import { UserModel } from '../../shared/Model/User.model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup
   public signobj = new UserModel();
   constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,private api : ApiService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      Name: [''],
      Username: [''],
      Password: ['']
    }),
      this.signupForm = new FormGroup({
        Name: new FormControl('', Validators.required),
        Username: new FormControl('', Validators.required),
        Password: new FormControl('', [Validators.required, Validators.minLength(5)])
      })
  }
  signup() {
    this.signobj.Name = this.signupForm.value.Name;
    this.signobj.Username = this.signupForm.value.Username;
    this.signobj.Password = this.signupForm.value.Password;

    this.api.SignUp(this.signobj)
    .subscribe(res =>{
      alert(res.message);
      this.router.navigate(['login']);
    })
  }
  get nameValidator() {
    return this.signupForm.get('Name');
  }
  get emailValidator() {
    return this.signupForm.get('Username');
  }
  get passwordValidator() {
    return this.signupForm.get('Password');
  }



}
