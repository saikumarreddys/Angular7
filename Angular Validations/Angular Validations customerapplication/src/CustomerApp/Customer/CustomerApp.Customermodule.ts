import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {CustomerRoutes} from '../Routing/CustomerApp.Customerrouting'

import { CustomerComponent } from '../Customer/CustomerApp.Customercomponent'


@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    RouterModule.forRoot(CustomerRoutes),
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
