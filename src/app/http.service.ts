import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {
  constructor(private http: Http) {}

  getData(url): Observable<any> {
    return this.http.get(url)
      .map((resp: Response) => {
        let data = resp.json();
        return data;
      })
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }
}
