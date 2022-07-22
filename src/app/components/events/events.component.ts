import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

// Services
import { EventService } from 'src/app/services/event/event.service';
import { CarService } from '../../services/car/car.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  private subscriptions = new Subscription();
  readonly columns = [ 'id', 'nombre', 'carro' ];
  readonly columnsMongo = [ 'id', 'nombre', 'carro', 'actions' ];
  public mode: String;
  public event: any;
  public events: any[];
  public eventsMongo: any[];
  public eventForm: FormGroup;
  public cars: any[];
  public loading: Boolean;

  constructor(private eventService: EventService, private carService: CarService) {
    this.mode = 'view';
    this.events = [];
    this.eventsMongo = [];
    this.eventForm = new FormGroup({
      id: new FormControl({ value: '', disabled: true }),
      nombre: new FormControl('', Validators.required),
      carro: new FormControl('', Validators.required)
    });
    this.cars = [];
    this.loading = false;
  }

  ngOnInit(): void {
    this.loadData();
    this.loadCars();
  }

  private loadData() {
    this.eventForm.reset();
    this.loadEvents();
    this.loadEventsMongo();
  }

  private loadEvents(): void {
    this.subscriptions.add(
      this.eventService.getEvents().subscribe(response => {
        this.events = response;
      })
    );
  }

  private loadEventsMongo(): void {
    this.subscriptions.add(
      this.eventService.getEventsMongo().subscribe(response => {
        this.eventsMongo = response;
      })
    );
  }

  public loadCars(): void {
    this.subscriptions.add(
      this.carService.getCars().subscribe(response => {
        this.cars = response;
      })
    );
  }

  public add(): void {
    this.mode = 'add';
    this.eventForm.reset();
  }

  public edit(event: any): void {
    this.mode = 'edit';
    this.eventForm.patchValue(event);
  }

  public delete(event: any): void {
    this.loading = true;
    this.deleteEvent(event);
  }

  public cancel(): void {
    this.mode = 'view';
  }

  public saveUpdate(): void {
    this.loading = true;
    let event = this.eventForm.getRawValue();
    if (this.mode === 'add') {
      this.save(event);
    } else {
      this.update(event);
    }
  }

  private save(event: any): void {
    this.subscriptions.add(
      this.eventService.saveEvent(event).subscribe(response => {
        this.loading = false;
        this.cancel();
        this.loadData();
      })
    );
  }

  private update(event: any): void {
    this.subscriptions.add(
      this.eventService.updateEvent(event.id, event).subscribe(response => {
        this.loading = false;
        this.cancel();
        this.loadData();
      })
    );
  }

  public deleteEvent(event: any): void {
    this.subscriptions.add(
      this.eventService.deleteEvent(event.id).subscribe(response => {
        this.loading = false;
        this.cancel();
        this.loadData();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
