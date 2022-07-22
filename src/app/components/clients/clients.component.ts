import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  private subscriptions = new Subscription();
  readonly columns = [ 'id', 'nombre', 'apellido', 'direccion', 'telefono' ];
  public clients: any[];

  constructor(private clientService: ClientService) {
    this.clients = [];
  }

  ngOnInit(): void {
    this.loadClients();
  }

  public loadClients(): void {
    this.subscriptions.add(
      this.clientService.getClients().subscribe(response => {
        this.clients = response;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
