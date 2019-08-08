import { Component } from '@angular/core';
import { HomeComponent } from '../Home/CustomerApp.Homecomponent';
import { CustomerComponent } from '../Customer/CustomerApp.Customercomponent';
import { SupplierComponent } from '../Supplier/CustomerApp.Suppliercomponent';


export const MainRoutes = [

    { path :"Home", component:HomeComponent },
    { path:"customer",component:CustomerComponent},
    { path:"supplier",component:SupplierComponent}

]

