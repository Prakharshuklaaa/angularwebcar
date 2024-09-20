import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-top-n-cars',
  templateUrl: './top-n-cars.component.html',
  styleUrl: './top-n-cars.component.css'
})
export class TopNCarsComponent {
  cars: any[] = [];  // Will store the list of cars
  topN:number = 0;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carService.getTopNCars(this.topN).subscribe(
      (response) => {
        this.cars = response;  // Assign response to the cars array
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }
}
