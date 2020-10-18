import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';

interface ContactMessageResponse {
  success: boolean;
}

@Injectable()
export class ContactService {

  constructor(private fns: AngularFireFunctions) {
  }

  makeContact(name: string, email: string, subject: string, content: string): Observable<ContactMessageResponse> {
    const callable = this.fns.httpsCallable('onCallSendContactMessage');
    return callable({
      name: name,
      email: email,
      subject: subject,
      content: content,
    });
  }

}
