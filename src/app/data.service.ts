import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { ContactListComponent } from './contact-list/contact-list.component';
import  'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

@Injectable()
export class DataService {
  private employeeUrl: string;


  constructor(private http: Http) {}

  getData(){
    return this.http.get('https://randomuser.me/api/?format=json')
    .map((response: Response) => response.json());
  }

  getOwnData(id:string, type='employee') {
    this.employeeUrl = 'https://randomuser.me/api/?seed=ea0aa5a01dc11230&results=10'
    return this.http.get(this.employeeUrl)
                .map(res => res.json());
  }

  getEmployee(id:string, type='employee'){
    this.employeeUrl = 'https://randomuser.me/api/?seed=ea0aa5a01dc11230&?first='+id;
    return this.http.get(this.employeeUrl)
                .map(res => res.json());
  }


 //  getContact(id: number): Promise<any> {
 //   return this.getContacts()
 //              .then(contacts => contacts.find(contact => contact.id.name === id));
 // }

}
// https://randomuser.me/api/?results=25
