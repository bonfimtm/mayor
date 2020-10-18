import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

enum Status {
  NoAction = 0,
  Success = 1,
  Error = 2,
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  name: string;
  email: string;
  subject: string;
  content: string;
  status: Status = Status.NoAction;
  loading = false;

  constructor(private mailService: ContactService) {
  }

  ngOnInit() {
  }

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
