import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ITag } from '../../shared/tag.model';

@Injectable()
export class TagForm {
  private form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  public create(tag: ITag): FormGroup {
    this.form = this.fb.group({
      title: [tag.title, Validators.required],
      color: [tag.color, Validators.required],
    });

    this.form.valueChanges
      .subscribe((item: ITag) => {
        tag.title = item.title;
        tag.color = item.color;
      });

    return this.form;
  }
}
