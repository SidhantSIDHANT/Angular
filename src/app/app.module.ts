import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './sheard/component/navbar/navbar.component';
import { FilterPipe } from './sheard/pipe/searchkey.pipe';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { ProcessTravellingComponent } from './sheard/component/process-travelling/process-travelling.component';
import { CountryComponent } from './sheard/component/country/country.component';
import { TuiInputComponent } from './sheard/component/tui-input/tui-input.component';
import { PlansCardDetailsComponent } from './sheard/component/plans-card-details/plans-card-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterPipe,
    ProcessTravellingComponent,
    CountryComponent,
    TuiInputComponent,
    PlansCardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
