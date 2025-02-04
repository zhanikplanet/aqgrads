import { Component } from '@angular/core';
import { JumbotronComponent } from "./jumbotron/jumbotron.component";
import { PriceListComponent } from "./price-list/price-list.component";

@Component({
  selector: 'app-main-page',
  imports: [JumbotronComponent, PriceListComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
