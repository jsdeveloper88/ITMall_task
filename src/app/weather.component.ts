import { Component, OnInit, AfterViewInit } from '@angular/core';

//import { WeatherData } from './weather.data';
//import { ActivatedRoute} from '@angular/router';
//import {Subscription} from 'rxjs/Subscription';

//import { HttpService } from './http.service';

@Component({
  selector: 'weather-page',
  template: `
    <div>
      <h3> Weather in the cities </h3>
      <input [(ngModel)]="APPID"/><br>
      <input [(ngModel)]="cities_by_comma_str"/><br>
      <button (click)="onCitiesInputChange()"> Show weather </button>
      <div *ngFor="let city of cities_arr">
        <city-weather [city]="city" [appid]="APPID"></city-weather>
      </div>
    </div>
  `//,
  //providers: [ HttpService ]
})
export class WeatherComponent {
  private cities_by_comma_str: string = 'Moscow,London,Paris';
  private APPID: string = '23cf588e40af4897627dfa67b26f0149';

  private cities_arr: string[];

  //constructor(private httpService: HttpService){}

  onCitiesInputChange(){
    this.cities_arr = this.cities_by_comma_str.split(',');
  }

  /*ngOnInit(){
    this.httpService.getData('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=23cf588e40af4897627dfa67b26f0149').subscribe(
        data => {
        console.log(data);
      }
    );
  }*/
}
