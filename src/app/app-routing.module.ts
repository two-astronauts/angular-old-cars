import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EventsComponent } from './components/events/events.component';
import { CarsComponent } from './components/cars/cars.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CountriesComponent } from './components/countries/countries.component';
import { SalesComponent } from './components/sales/sales.component';
import { ShoppingsComponent } from './components/shoppings/shoppings.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'countries',
    component: CountriesComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'shopping',
    component: ShoppingsComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
