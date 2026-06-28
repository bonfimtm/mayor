import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';

interface ContactMessageRequest {
  name: string;
  email: string;
  subject: string;
  content: string;
}

interface ContactMessageResponse {
  success: boolean;
}

const firebaseApp = initializeApp(environment.firebase);
const functions = getFunctions(firebaseApp);

@Injectable({ providedIn: 'root' })
export class ContactService {

  makeContact(name: string, email: string, subject: string, content: string): Observable<ContactMessageResponse> {
    const callable = httpsCallable<ContactMessageRequest, ContactMessageResponse>(
      functions,
      'onCallSendContactMessage',
    );
    return from(callable({ name, email, subject, content })).pipe(
      map(result => result.data),
    );
  }

}
