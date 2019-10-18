import { Component } from '@angular/core';
import { PortfolioDataService } from "../portfolioData.service";

@Component({
  selector: 'portfolio-selected',
  templateUrl: './portfolio-selected.component.html',
  styleUrls: ['./portfolio-selected.component.scss']
})

export class PortfolioSelectedComponent {

  constructor(public portfolioData:PortfolioDataService) {}

}
