import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ITest } from '../../shared/test.model';
import { IStep } from '../../shared/step.model';

@Injectable()
export class StepForm {
  private form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  public create(step: IStep): FormGroup {
    this.form = this.fb.group({
      text: [],
    });

    this.form.valueChanges
      .subscribe(item => {
        step.text = item.text;
      });

    return this.form;
  }
}
