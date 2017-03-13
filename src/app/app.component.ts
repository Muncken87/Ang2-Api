import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent  {
  items: any[] = [];
  constructor(private dataService: DataService) {}


  ngOnInit(){
    this.dataService.getData()
      .subscribe(
        data => console.log(data)
      );
  }
      onGetData(){
        this.dataService.getOwnData()
          .subscribe(
            results => {
              const myArray = [];
              for (let key in results) {
                myArray.push(results[key]);
              }
              this.items = myArray;
            }
          );
      }
}
