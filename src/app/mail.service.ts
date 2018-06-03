import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MailService {

  private baseUrl = 'http://bonfimtm.rf.gd/contact/mayor/';
  private options = {
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    withCredentials: true,
  };

  constructor(private http: Http) {
  }

  makeContact(name: string, email: string, subject: string, message: string): Observable<any[]> {

    const body = new URLSearchParams();
    body.set('name', name);
    body.set('email', email);
    body.set('subject', subject);
    body.set('message', message);

    return this.http.post(this.baseUrl, body.toString(), this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
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
