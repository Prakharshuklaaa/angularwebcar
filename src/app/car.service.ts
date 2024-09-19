import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseUrl = 'http://localhost:8080/cars'; // Your backend API

  constructor(private http: HttpClient) {}

  getCarById( id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllCars(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getTopNCars(n: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/top/${n}`);
  }
}
