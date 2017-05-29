import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { IStep } from '../../shared/step.model';

@Injectable()
export class StepForm {
  private form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  public create(step: IStep): FormGroup {
    this.form = this.fb.group({
      order_number: [step.order_number, Validators.required],
      text: [step.text, Validators.required],
      type: [step.type]
    });

    this.form.valueChanges
      .subscribe((item: IStep) => {
        step.order_number = item.order_number;
        step.text = item.text;
        step.type = item.type;
      });

    return this.form;
  }
}
