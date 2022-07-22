import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  private subscriptions = new Subscription();
  readonly columns = [ 'id', 'placa', 'marca', 'modelo', 'color', 'valor' ];
  public cars: any[];

  constructor(private carService: CarService) {
    this.cars = [];
  }

  ngOnInit(): void {
    this.loadCars();
  }

  public loadCars(): void {
    this.subscriptions.add(
      this.carService.getCars().subscribe(response => {
        this.cars = response;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
