import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';


const routesConfig: Routes = []

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { trangchuComponent } from './trangchu/trangchu.component';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetailComponent } from './detail/detail.component';
import { ContactsComponent } from './contacts/contacts.component'
@NgModule({
  declarations: [
    AppComponent,
    trangchuComponent,
    DetailComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(routesConfig),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }