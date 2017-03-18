import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterPipe } from './filter.pipe';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';



@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './contact-detail.component.html',
})

export class ContactDetailComponent implements OnInit  {

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,
) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.dataService.getContact(+params['id']))
    .subscribe(list => this.list = list);
}

}
