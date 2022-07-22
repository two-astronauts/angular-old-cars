import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  private subscriptions = new Subscription();
  readonly columns = [ 'id', 'nombre' ];
  public countries: any[];

  constructor(private countryService: CountryService) {
    this.countries = [];
  }

  ngOnInit(): void {
    this.loadCountries();
  }

  public loadCountries(): void {
    this.subscriptions.add(
      this.countryService.getCountries().subscribe(response => {
        this.countries = response;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
