import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  OriginFilter : string = '';
  destinationFilter : string = '';

FlightList$!: Observable<any[]>
  constructor(private api:ApiService) { }
  ngOnInit():void {
    this.FlightList$ = this.api.getAllFlightList();
  }
  // search(){
  //   this.FlightList$ = this.FlightList$.filter(res =>{
  //     return res.FBS_Flight_Origin.toLocaleLowerCase().match(this.OriginFilter.toLocaleUpperCase());
  //   })
  // }
 

}
