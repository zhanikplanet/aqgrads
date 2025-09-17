import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MailService } from '../../../service/mail.service';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  form!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  constructor(private formBuilder: FormBuilder, private mailService: MailService) { }

  send(): void {
    if (this.form.invalid) {
      alert('Please fill in all required fields');
      return;
    }
    const { name, email, message } = this.form.value;

    this.mailService.sendMail({ name, email, message }).subscribe({
      next: (response) => {
        console.log('Mail sent successfully', response);
        alert('Message sent successfully!');
        this.form.reset();
      },
      error: (error) => {
        console.error('Error sending mail', error);
        alert('Failed to send message. Please try again later.');
      }
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(null),
      email: this.formBuilder.control(null),
      message: this.formBuilder.control(null),
    });
  }

}
