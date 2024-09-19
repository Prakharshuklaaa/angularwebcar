import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCarByIdComponent } from './get-car-by-id.component';

describe('GetCarByIdComponent', () => {
  let component: GetCarByIdComponent;
  let fixture: ComponentFixture<GetCarByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetCarByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCarByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
