import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContactService } from '../contact.service';

enum Status {
  NoAction = 0,
  Success = 1,
  Error = 2,
}

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  private mailService = inject(ContactService);

  name: string;
  email: string;
  subject: string;
  content: string;
  status: Status = Status.NoAction;
  loading = false;

  onSubmit(contactForm) {
    if (contactForm.valid) {
      this.loading = true;
      this.mailService.makeContact(this.name, this.email, this.subject, this.content)
        .subscribe(value => {

          if (value.success) {

            this.status = Status.Success;

            this.name = '';
            this.email = '';
            this.subject = '';
            this.content = '';

            contactForm.resetForm();

          } else {
            this.status = Status.Error;
          }

        }, null, () => {
          this.loading = false;
        });
    }
  }

}
