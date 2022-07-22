import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingService } from 'src/app/services/shopping/shopping.service';

@Component({
  selector: 'app-shoppings',
  templateUrl: './shoppings.component.html',
  styleUrls: ['./shoppings.component.scss']
})
export class ShoppingsComponent implements OnInit {
  private subscriptions = new Subscription();
  readonly columns = [ 'id', 'fecha', 'valor', 'cliente', 'carro' ];
  public shoppings: any[];

  constructor(private shoppingService: ShoppingService) {
    this.shoppings = [];
  }

  ngOnInit(): void {
    this.loadShoppings();
  }

  public loadShoppings(): void {
    this.subscriptions.add(
      this.shoppingService.getShoppings().subscribe(response => {
        this.shoppings = response;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
