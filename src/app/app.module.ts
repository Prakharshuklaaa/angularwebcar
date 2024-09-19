import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetCarByIdComponent } from './get-car-by-id/get-car-by-id.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';
import { GetAllCarsComponent } from './get-all-cars/get-all-cars.component';
import { TopNCarsComponent } from './top-n-cars/top-n-cars.component';
import { CarService } from './car.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GetCarByIdComponent,
    DeleteCarComponent,
    GetAllCarsComponent,
    TopNCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
