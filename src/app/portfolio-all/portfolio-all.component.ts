import { Component } from '@angular/core';
import { PortfolioDataService } from "./../portfolioData.service";

@Component({
  selector: 'portfolio-all',
  templateUrl: './portfolio-all.component.html',
  styleUrls: ['./portfolio-all.component.scss']
})
export class PortfolioAllComponent {

  constructor(public portfolioData:PortfolioDataService) {}

}
