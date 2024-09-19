import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetCarByIdComponent } from './get-car-by-id/get-car-by-id.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';
import { GetAllCarsComponent } from './get-all-cars/get-all-cars.component';
import { TopNCarsComponent } from './top-n-cars/top-n-cars.component';

const routes: Routes = [
  { path: 'get-car', component: GetCarByIdComponent },
  { path: 'delete-car', component: DeleteCarComponent },
  { path: 'all-cars', component: GetAllCarsComponent },
  { path: 'top-n-cars', component: TopNCarsComponent },
  { path: '', redirectTo: 'get-car', pathMatch: 'full' }, // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
