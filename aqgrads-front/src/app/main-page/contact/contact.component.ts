import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MailService, MailRequest } from '../../../service/mail.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mailService: MailService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  send(): void {
    if (this.form.invalid) {
      alert(this.translate.instant('ContactForm.Errors.FillAllFields'));
      return;
    }

    const { name, email, message } = this.form.value;

    const payload: MailRequest = {
      toEmail: 'zhanik.planet1@gmail.com',
      subject: `Message from ${name} (${email})`,
      body: message
    };

    this.mailService.sendMail(payload).subscribe({
      next: () => {
        alert(this.translate.instant('ContactForm.Success'));
        this.form.reset();
      },
      error: (err) => {
        console.error('Error sending mail', err);
        alert(this.translate.instant('ContactForm.Failed'));
      }
    });
  }
}
