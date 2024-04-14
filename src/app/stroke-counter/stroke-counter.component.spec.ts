import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrokeCounterComponent } from './stroke-counter.component';

describe('StrokeCounterComponent', () => {
  let component: StrokeCounterComponent;
  let fixture: ComponentFixture<StrokeCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrokeCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrokeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
