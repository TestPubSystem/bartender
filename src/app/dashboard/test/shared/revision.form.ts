import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { IRevision } from '../../shared/revision.model';

@Injectable()
export class RevisionForm {
  private form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  public create(revision: IRevision): FormGroup {
    this.form = this.fb.group({
      title: [revision.title, Validators.required],
      desc: [revision.desc, Validators.required],
      pre_condition: [revision.pre_condition, Validators.required],
      post_condition: [revision.post_condition, Validators.required],
      steps: [revision.steps]
    });

    this.form.valueChanges
      .subscribe((item: IRevision) => {
        revision.title = item.title;
        revision.desc = item.desc;
        revision.pre_condition = item.pre_condition;
        revision.post_condition = item.post_condition;
      });

    return this.form;
  }
}
