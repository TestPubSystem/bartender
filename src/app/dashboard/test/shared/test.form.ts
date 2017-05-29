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
      title: ['', Validators.required],
      desc: ['', Validators.required],
      pre_condition: ['', Validators.required],
      post_condition: ['', Validators.required],
    });

    this.form.valueChanges
      .subscribe(item => {
        test.last_revision.title = item.title;
        test.last_revision.desc = item.desc;
        test.last_revision.pre_condition = item.pre_condition;
        test.last_revision.post_condition = item.post_condition;
      });

    return this.form;
  }
}
