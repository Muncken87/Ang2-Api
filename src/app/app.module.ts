import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CapitalizePipe } from "./capitalize.pipe";
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterPipe } from './filter.pipe';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactListComponent } from './contact-list/contact-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    NavbarComponent,
    FilterPipe,
    ContactDetailComponent,
    ContactListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'details',
        component: ContactDetailComponent
      },
      {
        path: 'list',
        component: ContactListComponent
      }
    ]),
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
