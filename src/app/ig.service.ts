import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class IgService {

  private baseUrl = 'http://bonfimtm.rf.gd/ig/';
  private bioUrl = `${this.baseUrl}?p=mayor&q=bio`;
  private mediaRecentUrl = `${this.baseUrl}?p=mayor&q=media-recent`;
  private options = {
    withCredentials: true,
  };

  constructor(private http: Http) {
  }

  getBio(): Observable<any[]> {
    return this.http.get(this.bioUrl, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getMediaRecent(): Observable<any[]> {
    return this.http.get(this.mediaRecentUrl, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log('res', res);
    return res.json().data || [];
  }

  private handleError(error: Response | any) {
    console.error('error', error);
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
