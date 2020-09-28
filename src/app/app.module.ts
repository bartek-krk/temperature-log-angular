import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TlMaterialModule } from './tl-material/tl-material.module';
import { StationsComponent } from './stations/stations.component';
import { StationService } from './shared/station.service';
import { HttpClientModule } from '@angular/common/http';
import { MeasurementComponent } from './measurement/measurement.component';
import { MeasurementService } from './shared/measurement.service';
import { DeleteComponent } from './delete/delete.component';
import { FormsModule } from '@angular/forms';
import { DeleteService } from './shared/delete.service';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './shared/register.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    StationsComponent,
    MeasurementComponent,
    DeleteComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TlMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StationService,MeasurementService,DeleteService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
