import { Component } from '@angular/core';
import { JumbotronComponent } from "./jumbotron/jumbotron.component";
import { PriceListComponent } from "./price-list/price-list.component";
import { LinkToCloudpaymentComponent } from "./link-to-cloudpayment/link-to-cloudpayment.component";
import { FuturePlansComponent } from "./future-plans/future-plans.component";
import { ContactComponent } from "./contact/contact.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SponsorsComponent } from "./sponsors/sponsors.component";

@Component({
  selector: 'app-main-page',
  imports: [JumbotronComponent, PriceListComponent, LinkToCloudpaymentComponent, FuturePlansComponent, ContactComponent, SidebarComponent, SponsorsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
