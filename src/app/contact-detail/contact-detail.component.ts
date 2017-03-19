import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../employee';

import { FilterPipe } from '../filter.pipe';
import { ActivatedRoute} from '@angular/router';
import { RouterModule }   from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';




@Component({
  moduleId: module.id,
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
})

export class ContactDetailComponent implements OnInit  {
  id: string;
  employee: Employee[];

  constructor(
    private dataService:DataService,
    private route:ActivatedRoute)
  {}


  ngOnInit(){
    this.route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this.dataService.getEmployee(id)
              .subscribe(employee => {
                this.employee = employee;
              })
        })

  }
//   goBack(): void {
//   this.location.back();
// }

}
