import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { FilterPipe } from '../filter.pipe';
import { Employee } from '../employee';
import { RouterModule }   from '@angular/router';



@Component({
  moduleId: module.id,
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass'],
})

export class ContactListComponent implements OnInit  {
  employees = [];
  employeeId: string;


  constructor(private dataService: DataService) {
  }

  //Runs api fetch on init and puts the api data into an array
  ngOnInit(){
    this.dataService.getOwnData()
      .subscribe(
        results => {
          const myArray = [];
          for (let key in results) {
            myArray.push(results[key]);
          }
          this.employees = results.results;
        }
      );
  }

}
