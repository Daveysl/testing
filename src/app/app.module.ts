import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PortfolioSelectedComponent } from './portfolio-selected/portfolio-selected.component';
import { PortfolioAllComponent } from './portfolio-all/portfolio-all.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioSelectedComponent,
    PortfolioAllComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "selected", component: PortfolioSelectedComponent },
      { path: "all", component: PortfolioAllComponent },
      { path: "", redirectTo: "selected", pathMatch: "full" },
      { path: "**", redirectTo: "selected", pathMatch: "full" },
    ])  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
