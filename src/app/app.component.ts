import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { NavbarComponent } from './navbar.component';
import { Http, Response } from "@angular/http";
import { SearchService } from './search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent  {
  items: any[] = [];
  http: Http;

  constructor(private dataService: DataService, searchService: SearchService,http: Http) {
    this.http = http;
  }


// nameSearch input
// performSearch button

  performSearch(nameSearch: HTMLInputElement): void {
       var apiLink = this.items + nameSearch.value;

        this.http.request(apiLink)
          .subscribe((res: Response) => {
               console.log(res.json());
         });
      }

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

    this.dataService.getData()
      .subscribe(
        data => console.log(data)
    );
  }

}
