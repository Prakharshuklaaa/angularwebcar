import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNCarsComponent } from './top-n-cars.component';

describe('TopNCarsComponent', () => {
  let component: TopNCarsComponent;
  let fixture: ComponentFixture<TopNCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopNCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
