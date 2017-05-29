import { Component, OnInit } from '@angular/core';
import { TestForm } from './shared/test.form';
import { TagForm } from './shared/tag.form';
import { RevisionForm } from './shared/revision.form';
import { StepForm } from './shared/step.form';
import { ITest, Test } from '../shared/test.model';
import { ITag, Tag } from '../shared/tag.model';
import { IRevision, Revision } from '../shared/revision.model';
import { IStep, Step } from '../shared/step.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [TestForm, TagForm, RevisionForm, StepForm]
})
export class TestComponent implements OnInit {
  public test: ITest = new Test();
  public tag: ITag = new Tag();
  public revision: IRevision = new Revision();
  public step: IStep = new Step();
  public forms = [];

  constructor(public testForm: TestForm,
              public tagForm: TagForm,
              public revisionForm: RevisionForm,
              public stepForm: StepForm) {
    this.forms.push(this.testForm.create(this.test));
    this.forms.push(this.tagForm.create(this.tag));
    this.forms.push(this.revisionForm.create(this.revision));
    this.forms.push(this.stepForm.create(this.step));
    console.log(this.forms);
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.test.last_revision = Object.assign({}, this.revision);
  }

  public onStep() {
    this.revision.steps.push(Object.assign({}, this.step));
    this.forms[3].reset();
  }

  public onTag() {
    this.test.tags.push(Object.assign({}, this.tag));
    this.forms[1].reset();
  }
}
