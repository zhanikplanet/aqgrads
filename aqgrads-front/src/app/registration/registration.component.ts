import { Component } from '@angular/core';
import { FormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ToastrService} from "ngx-toastr"
@Component({
  selector: 'app-registration',
  imports: [FormsModule,RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
 user = {
    fullName:null,
    graduateYear:null,
    email: null,
    phoneNumber:null,
    password: null
  };

  constructor(private toastr: ToastrService) {}

  onSubmit(user:{fullName:string; graduateYear:number; email:string; phoneNumber:number; password:string}) {
    this.toastr.show("User logged in successfully");
    console.log(user);
  }
}
