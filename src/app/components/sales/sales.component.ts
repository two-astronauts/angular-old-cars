import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SaleService } from 'src/app/services/sale/sale.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  private subscriptions = new Subscription();
  readonly columns = [ 'id', 'fecha', 'valor', 'cliente', 'carro' ];
  public sales: any[];

  constructor(private saleService: SaleService) {
    this.sales = [];
  }

  ngOnInit(): void {
    this.loadSales();
  }

  public loadSales(): void {
    this.subscriptions.add(
      this.saleService.getSales().subscribe(response => {
        this.sales = response;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
