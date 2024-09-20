// get-all-cars.component.ts
import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-get-all-cars',
  templateUrl: './get-all-cars.component.html',
  styleUrls: ['./get-all-cars.component.css']
})
export class GetAllCarsComponent implements OnInit {
  cars: any[] = [];  // Will store the list of cars

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carService.getAllCars().subscribe(
      (response) => {
        this.cars = response;  // Assign response to the cars array
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }
}
