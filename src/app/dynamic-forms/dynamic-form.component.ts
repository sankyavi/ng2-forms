import { Component , OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';


import { MY_DYNAMIC_FORM_MODEL } from './dynamic-form.model';
import {DynamicFormControlModel, DynamicFormService} from "@ng2-dynamic-forms/core";


@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html'
})

export class DynamicFormsComponent implements OnInit {
    myDynamicFormModel: Array<DynamicFormControlModel> = MY_DYNAMIC_FORM_MODEL;
    myForm: FormGroup;

    constructor(private dynamicFormService: DynamicFormService) {}

    ngOnInit() {
        this.myForm = this.dynamicFormService.createFormGroup(this.myDynamicFormModel);
    }
}