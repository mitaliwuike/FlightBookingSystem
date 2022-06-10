import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-passanger-details',
  templateUrl: './passanger-details.component.html',
  styleUrls: ['./passanger-details.component.css']
})
export class PassangerDetailsComponent implements OnInit {
  DetailsList$!: Observable<any[]>
  datetimeFilter : string = '';

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.DetailsList$ = this.api.getAllDetails();

  }
  

}
