import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'my-app',
  template: require('./app.html')
})
export class AppComponentvalid implements OnInit {
  form: FormGroup;
  num: number = 5;

  ngOnInit() {
    let password = new FormControl('', Validators.required);
    let certainPassword = new FormControl('', CustomValidators.equalTo(password));

    this.form = new FormGroup({
      password: password,
      certainPassword: certainPassword
    });
  }

  onSubmit(form) {
    console.log(form);
  }
}