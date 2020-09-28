import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { MeasurementComponent } from './measurement/measurement.component';
import { RegisterComponent } from './register/register.component';
import { StationsComponent } from './stations/stations.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'stations',
    component: StationsComponent
  },
  {
    path: 'measurements/:stationId',
    component: MeasurementComponent
  },
  {
    path: 'delete',
    component: DeleteComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
