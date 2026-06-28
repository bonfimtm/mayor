import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { TicketPageComponent } from './ticket-page/ticket-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'recorrer-infracoes-de-transito', component: TicketPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
