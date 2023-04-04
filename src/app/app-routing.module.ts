import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** 
 * This module handles the routing between the components 
and load respective component in the router outlet
**/
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
