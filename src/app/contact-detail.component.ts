import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterPipe } from './filter.pipe';



@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './contact-detail.component.html',
})

export class ContactDetailComponent  {
  title = 'Hello Detail Page';

}
