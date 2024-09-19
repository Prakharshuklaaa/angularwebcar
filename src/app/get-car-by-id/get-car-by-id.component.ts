import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-get-car-by-id',
  templateUrl: './get-car-by-id.component.html',
  styleUrls: ['./get-car-by-id.component.css']
})
export class GetCarByIdComponent {
  carId: number = 0;
  car: any;

  constructor(private carService: CarService) {}

  getCarById() {
    this.carService.getCarById(this.carId).subscribe((data: any) => {
      this.car = data;
    });
  }
}