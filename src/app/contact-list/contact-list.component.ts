import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FilterPipe } from '../filter.pipe';



@Component({
  moduleId: module.id,
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass'],
})

export class ContactListComponent  {
  items = [];

  constructor(private dataService: DataService) {
  }

  // Runs api fetch on init
  ngOnInit(){
    this.dataService.getOwnData()
      .subscribe(
        results => {
          const myArray = [];
          for (let key in results) {
            myArray.push(results[key]);
          }
          this.items = results.results;
        }
      );

    // Console logs the api array in the console for testing
    // this.dataService.getData()
    //   .subscribe(
    //     data => console.log(data)
    // );
  }

}
