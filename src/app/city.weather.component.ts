import { Component, Input, OnInit } from '@angular/core';

import { HttpService } from './http.service';

import { WeatherData } from './weather.data';

@Component({
  selector: 'city-weather',
  template: `
    <h4> {{weather.name}}: </h4>
    <span> Temperature: {{weather.temp}} K </span><br>
    <span> Pressure: {{weather.pressure}} hPa </span><br>
    <span> Humidity: {{weather.humidity}} % </span><br>
    <span> Wind Speed: {{weather.speed}} meter/sec</span>
  `,
  styles: [`
  `],
  providers: [ HttpService ]
})
export class CityWeatherComponent implements OnInit {
  @Input() city: string;
  @Input() appid: string;

  weather: WeatherData = new WeatherData('Another city', 0, 0, 0, 0);

  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.httpService.getData('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&APPID=' + this.appid).subscribe(
        data => {
        //console.log(data);
        //setTimeout(function() {
        this.weather = new WeatherData(data.name, data.main.temp, data.main.pressure, data.main.humidity, data.wind.speed);
        console.log(this.weather);
        //}, 3000);
      }
    )
  }
}
