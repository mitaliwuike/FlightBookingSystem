import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
 import { UserModel } from '../../shared/Model/User.model';
 import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm !: FormGroup;
 public loginobj = new UserModel();

userid :any;

constructor(private formBuilder: FormBuilder,private http: HttpClient,private router: Router,private api:ApiService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Username:[''],
      password:['']
    }),
    this.loginForm = new FormGroup({
      Username: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }
  login(){
    this.loginobj.Username = this.loginForm.value.Username;
    this.loginobj.Password = this.loginForm.value.Password;
    this.api.login(this.loginobj)
    .subscribe(res =>{
      alert(res.message);

      this.router.navigate([''])
     })
  }
  get emailValidator() {
    return this.loginForm.get('Username');
  }
  get passwordValidator() {
    return this.loginForm.get('Password');
  }

}
