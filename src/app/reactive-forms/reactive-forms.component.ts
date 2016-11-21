import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

function passwordMatcher(c: AbstractControl) {
  return c.get('password').value === c.get('confirm').value
    ? null : {'nomatch': true};
}

@Component({
  selector: 'reactive-forms-comp',
  templateUrl: './reactive-forms.component.html'
})
export class ReactiveFormsComponent {
  form: FormGroup;
  flag: boolean = false;
  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      first: '',
      last: '',
      test1: '',
      test2: '',
      account: this.fb.group({
        username: '',
        password: ['', Validators.required],
        confirm: ['', Validators.required],
      }, {validator: passwordMatcher})
    });
    this.form.patchValue({
      first: 'Nancy',
      last: 'Drew'
    });
  }
  clicked(){
    if(this.flag){
      this.flag = false;
    }else{
    this.flag = true;
    }
  }
}
