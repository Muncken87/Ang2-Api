import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CapitalizePipe} from "./capitalize.pipe";

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { SearchService } from './search.service';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    DataService,
    SearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
