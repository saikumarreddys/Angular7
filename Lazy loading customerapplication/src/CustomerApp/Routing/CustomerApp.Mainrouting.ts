import { Component } from '@angular/core';
import { HomeComponent } from '../Home/CustomerApp.Homecomponent';




export const MainRoutes = [

    { path :"Home", component:HomeComponent },
    { path:"customer",loadchildren:'../Customer/CustomerApp.Customermodule#CustomerModule'},
    { path:"supplier",loadchildren:'../Supplier/CustomerApp.Suppliermodule#SupplierModule'}

]

