import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementPlotComponent } from './measurement-plot.component';

describe('MeasurementPlotComponent', () => {
  let component: MeasurementPlotComponent;
  let fixture: ComponentFixture<MeasurementPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementPlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
