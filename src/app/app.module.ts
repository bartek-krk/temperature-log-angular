import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MeasurementPlotComponent } from './measurement-plot/measurement-plot.component';
import { MeasurementTableComponent } from './measurement-table/measurement-table.component';
import { TlMaterialModule } from './tl-material/tl-material.module';
import { StationsComponent } from './stations/stations.component';
import { StationService } from './shared/station.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MeasurementPlotComponent,
    MeasurementTableComponent,
    StationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TlMaterialModule,
    HttpClientModule
  ],
  providers: [StationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
