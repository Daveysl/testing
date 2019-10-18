import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAllComponent } from './portfolio-all.component';

describe('PortfolioAllComponent', () => {
  let component: PortfolioAllComponent;
  let fixture: ComponentFixture<PortfolioAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
