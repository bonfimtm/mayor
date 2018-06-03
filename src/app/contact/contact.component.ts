import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  subject: string;
  message: string;

  /*
    0 - No action
    1 - Success
    2 - Error
  */
  status = 0;
  loading = false;

  constructor(private mailService: MailService) {
  }

  ngOnInit() {
  }

  onSubmit(contactForm) {
    console.log(contactForm);
    if (contactForm.valid) {
      this.loading = true;
      this.mailService.makeContact(this.name, this.email, this.subject, this.message)
        .subscribe(data => {
          console.log('data', data);
          const res: any = data;

          if (res.result) {

            this.name = '';
            this.email = '';
            this.subject = '';
            this.message = '';

            this.status = 1;

            contactForm.resetForm();

          } else {
            this.status = 2;
          }

        }, null, () => {
          this.loading = false;
        });
    }
  }

}
