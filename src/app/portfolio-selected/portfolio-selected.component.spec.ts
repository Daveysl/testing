import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSelectedComponent } from './portfolio-selected.component';

describe('PortfolioSelectedComponent', () => {
  let component: PortfolioSelectedComponent;
  let fixture: ComponentFixture<PortfolioSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
