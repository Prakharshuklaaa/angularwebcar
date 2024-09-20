import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseUrl = 'http://localhost:8080'; // Your backend API

  constructor(private http: HttpClient) {}

  getCarById( id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/cars/${id}`);
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/cardelete/${id}`);
  }

  getAllCars(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allcars`);
  }

  getTopNCars(n: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/ordered-by-price`,{params:{limit: n.toString()}});
  }
}
