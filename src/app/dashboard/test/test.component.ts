import { Component, OnInit } from '@angular/core';
import { TestForm } from './shared/test.form';
import { ITest, Test } from '../shared/test.model';
import { Tag } from '../shared/tag.model';
import { TagsService } from '../shared/tags.service';
import { FormGroup } from '@angular/forms';
import { Revision } from '../shared/revision.model';
import { TagForm } from './shared/tag.form';
import { StepForm } from './shared/step.form';
import { IStep, Step } from '../shared/step.model';
import { TestsService } from '../shared/tests.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [TestForm, TagsService, TagForm, StepForm]
})
export class TestComponent implements OnInit {
  public test: ITest = new Test();
  public step: IStep = new Step();
  public testFormGroup: FormGroup;
  public tagFormGroup: FormGroup;
  public stepFormGroup: FormGroup;
  public tags: Tag[] = [];

  constructor(private testForm: TestForm,
              private tagsService: TagsService,
              private tagForm: TagForm,
              private stepForm: StepForm,
              private testsService: TestsService) {

    this.tagsService.all(true).subscribe(
      (tags: Tag[]) => {
        this.tags = tags;
      }
    );
    this.test.last_revision = new Revision();
    this.testFormGroup = this.testForm.create(this.test);
    this.tagFormGroup = this.tagForm.create(this.test);
    this.stepFormGroup = this.stepForm.create(this.step);
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.testsService.create(this.test).subscribe(
      test => {
        this.testsService.all(true);
      }
    );
  }

  public tagsListValue(tag: Tag): string {
    return tag ? tag.title : '';
  }

  public onDropTag(index) {
    this.test.tags = this.test.tags.filter((item: Tag, i) => {
      if (index !== i) {
        return item;
      }
    });
  }

  public onDropStep(index) {
    this.test.last_revision.steps = this.test.last_revision.steps.filter((item: Step, i) => {
      if (index !== i) {
        return item;
      }
    });
  }

  public onStep() {
    this.test.last_revision.steps.push(Object.assign({}, this.step));
    this.stepFormGroup.reset();
  }

  public onTag(tag: Tag) {
    this.test.tags.push(Object.assign({}, tag));
  }
}
