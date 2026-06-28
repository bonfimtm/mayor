import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { TicketPageComponent } from './ticket-page/ticket-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'recorrer-infracoes-de-transito', component: TicketPageComponent },
];
