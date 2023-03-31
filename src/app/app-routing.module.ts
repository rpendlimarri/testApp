import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
/** (b/435324): This module handles the routing between the components 
and load respective component in the router outlet **/
export class AppRoutingModule { }
