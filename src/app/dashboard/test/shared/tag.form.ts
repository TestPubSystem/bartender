import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ITest } from '../../shared/test.model';

@Injectable()
export class TagForm {
  private form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  public create(test: ITest): FormGroup {
    this.form = this.fb.group({
      tag: [],
    });

    this.form.valueChanges
      .subscribe(item => {
        test.tags.push(Object.assign({}, item.tag));
      });

    return this.form;
  }
}
