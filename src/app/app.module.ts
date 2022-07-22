import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Dependencies
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule, TuiDataListModule, TuiLoaderModule } from "@taiga-ui/core";
import { TuiDataListWrapperModule, TuiInputModule, TuiIslandModule, TuiSelectModule } from '@taiga-ui/kit';
import { TuiTableModule } from "@taiga-ui/addon-table";

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EventsComponent } from './components/events/events.component';
import { CarsComponent } from './components/cars/cars.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CountriesComponent } from './components/countries/countries.component';
import { SalesComponent } from './components/sales/sales.component';
import { ShoppingsComponent } from './components/shoppings/shoppings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NotFoundComponent,
    EventsComponent,
    CarsComponent,
    ClientsComponent,
    CountriesComponent,
    SalesComponent,
    ShoppingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TuiRootModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiTableModule,
    TuiInputModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiLoaderModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
