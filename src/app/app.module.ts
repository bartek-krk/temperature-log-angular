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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    StationsComponent,
    MeasurementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TlMaterialModule,
    HttpClientModule
  ],
  providers: [StationService,MeasurementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
