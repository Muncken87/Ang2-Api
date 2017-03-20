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

  // Function that displays 20 users from a fixed seed
  getOwnData() {
    this.employeeUrl = 'https://randomuser.me/api/?seed=ea0aa5a01dc11230&results=20'
    return this.http.get(this.employeeUrl)
                .map(res => res.json());
  }

    // Non functional function that should fetch the selected user, and pick the current user from the fetched array,
    // Each user dont have a unique id, so the way to choose the selected one is to find it in the array
  getEmployee(id: number,type='employee'){
    this.employeeUrl = ' https://randomuser.me/api/?seed=ea0aa5a01dc11230&results=20'
    return this.http.get(this.employeeUrl)
                .map(res => res.json());
  }

  //   getContact(id: number): Promise<any> {
  //   return this.getContacts()
  //              .then(employees => employees.find(employee => employee.id.name === id));
  // }

}
// https://randomuser.me/api/?results=25
