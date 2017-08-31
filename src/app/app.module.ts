import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { HttpModule }   from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather.component';
import { CityWeatherComponent } from './city.weather.component';

const appRoutes: Routes = [
  { path: 'weather', component: WeatherComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CityWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
