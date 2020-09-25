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
    TlMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
