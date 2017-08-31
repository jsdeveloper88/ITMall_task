import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'weather-page',
  template: `
    <div>
      <h2> The current weather in the cities </h2>

      <label for="key"> Key </label>
      <input id="key" type="text" placeholder="Input your key you have generated here: https://home.openweathermap.org/api_keys" [(ngModel)]="APPID"/><br>

      <label for="cities"> Cities </label>
      <input id="cities" type="text" placeholder="Input cities by comma in English(max amount - 20)" [(ngModel)]="cities_by_comma_str"/><br>

      <button (click)="onCitiesInputChange()"> Show weather </button>

      <div *ngFor="let city of cities_arr">
        <city-weather [city]="city" [appid]="APPID"></city-weather>
      </div>
    </div>
  `,
  styles: [`
    h2 {
      margin: 5px 0;
    }

    label {
      width: 45px;
      display: inline-block;
      font-weight: bold;
    }

    input[type=text] {
      width: 700px;
      margin: 5px 0;
      padding: 5px;
      border-radius: 5px;
      font-size: 18px;
    }

    button {
      display: inline-block;
      background-color: rgb(15, 190, 124);
      padding: 12px;
      margin: 5px 0;
      color: white;
      border-radius: 5px;
      border: 1px solid white;
      width: 120px;
    }
  `]
})
export class WeatherComponent {
  private cities_by_comma_str: string = 'Moscow, London, Paris';
  private APPID: string = '23cf588e40af4897627dfa67b26f0149';

  private cities_arr: string[];

  onCitiesInputChange() {
    this.cities_arr = this.cities_by_comma_str.split(',');
  }
}
