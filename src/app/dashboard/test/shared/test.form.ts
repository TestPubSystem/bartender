import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ITest } from '../../shared/test.model';

@Injectable()
export class TestForm {
  private form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  public create(test: ITest): FormGroup {
    this.form = this.fb.group({
      last_revision: [test.last_revision],
      tags: [test.tags],
    });

    this.form.valueChanges
      .subscribe((item: ITest) => {

      });

    return this.form;
  }
}
