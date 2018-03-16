import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form: FormGroup;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      oldPassword: ['', Validators.minLength(2)],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }
}
