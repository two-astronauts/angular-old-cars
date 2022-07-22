import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public menu: Array<any>;

  constructor() {
    this.menu = [
      { name: 'Home', path: '' },
      { name: 'Carros', path: 'cars' },
      { name: 'Clientes', path: 'clients' },
      { name: 'Paises', path: 'countries' },
      { name: 'Compras', path: 'shopping' },
      { name: 'Ventas', path: 'sales' },
      { name: 'Eventos', path: 'events' },
    ];
  }

  ngOnInit(): void {
  }

}
