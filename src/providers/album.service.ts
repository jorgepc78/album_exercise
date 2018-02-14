import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AlbumService {

  constructor(
    private http: Http
  ) {}

  getLastAlbums() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .map((response: Response) => {
        return response;
      })
      .catch(this.handleError);
  }


  private handleError(error: Response | any) {
    return Observable.throw(error);
  }


}
