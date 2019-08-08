import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {MainRoutes} from '../Routing/CustomerApp.Mainrouting'


import { HomeComponent } from '../Home/CustomerApp.Homecomponent'
import {CustomerComponent} from '../Customer/CustomerApp.Customercomponent'
import {SupplierComponent} from '../Supplier/CustomerApp.Suppliercomponent'

import { MasterComponent } from '../Home/CustomerApp.Mastercomponent'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    HomeComponent,MasterComponent,SupplierComponent,CustomerComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class MainModule { }
