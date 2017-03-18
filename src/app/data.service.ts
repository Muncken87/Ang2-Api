import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { ContactListComponent } from './contact-list/contact-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

@Injectable()
export class DataService {

  getContacts(): Promise<any> {
   return this.getData().toPromise();
  }


// nameSearch input
// performSearch button
  constructor(private http: Http) {}

  getData(){
    return this.http.get('https://randomuser.me/api/?format=json')
    .map((response: Response) => response.json());
  }

  getOwnData() {
    return this.http.get('https://randomuser.me/api/?results=25')
    .map((response: Response) => response.json());
  }

  getContact(id: number): Promise<any> {
   return this.getContacts()
              .then(contacts => contacts.find(contact => contact.id.name === id));
 }

}
// https://randomuser.me/api/zb868pou?key=9L5E-WMFI-JMGR-YXG9
// https://test-9a9cf.firebaseio.com/
// https://randomuser.me/api/?results=10/?format=json
// https://randomuser.me/api/?results=10
