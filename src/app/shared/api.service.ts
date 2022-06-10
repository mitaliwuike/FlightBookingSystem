import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public loginApiUrl :string ="https://localhost:44310/api/Login"
  readonly url ="https://localhost:44310/api/Flight/GetAllFlight"

  constructor(private http:HttpClient) { }
  SignUp(empobj : any){
    return this.http.post<any>("https://localhost:44310/api/Login/signup",empobj);
    // return this.http.post<any>(`${this.loginApiUrl}Signup`,empobj)
  }
  login(empobj : any){

    return this.http.post<any>("https://localhost:44310/api/Login/Login",empobj);

    // return this.http.post<any>(`${this.loginApiUrl}Signup`,empobj)
  }
    getAllFlightList():Observable<any[]>{
      return this.http.get<any[]>(this.url);
    
  }
  addPassanger(data:any){
    return this.http.post<any>("https://localhost:44310/api/Flight/Add_Passanger", data)
  }
  getAllDetails():Observable<any[]>{
    return this.http.get<any[]>("https://localhost:44310/api/Flight/GetDetails");
  
}
 
}
