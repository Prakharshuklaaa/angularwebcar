import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';
import { GetCarByIdComponent } from './get-car-by-id/get-car-by-id.component';
import { GetAllCarsComponent } from './get-all-cars/get-all-cars.component';
import { TopNCarsComponent } from './top-n-cars/top-n-cars.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteCarComponent,
    GetCarByIdComponent,
    GetAllCarsComponent,
    TopNCarsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // Ensure FormsModule is imported for two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
