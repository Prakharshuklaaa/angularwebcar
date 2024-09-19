import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent {
  carId: number = 0;

  constructor(private carService: CarService) {}

  deleteCar() {
    this.carService.deleteCar(this.carId).subscribe(() => {
      alert('Car deleted successfully');
    });
  }
}