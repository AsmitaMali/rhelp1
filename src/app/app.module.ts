import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ResultlistComponent } from './resultlist/resultlist.component';
import { FiltersComponent } from './filters/filters.component';
import { ResultdetlComponent } from './resultdetl/resultdetl.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { FlexLayoutModule } from "@angular/flex-layout";

import { provideODataService} from './searchbar/odata.serviceProvider'


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    SearchbarComponent,
    ResultlistComponent,
    FiltersComponent,
    ResultdetlComponent,
    Screen1Component,
    Screen2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [provideODataService("http://DEVNWNGD.RIL.COM:8000/sap/opu/odata/sap/Z_DQ_DATA_SRV/$metadata?saml2=disabled")],
  bootstrap: [AppComponent]
})
export class AppModule { }
