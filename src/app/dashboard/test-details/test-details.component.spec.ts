import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDetailsComponent } from './test-details.component';
import { MdCardModule, MdChipsModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TestsService } from '../shared/tests.service';
import { MockTestsService } from '../shared/mockTests.service';

describe('TestDetailsComponent', () => {
  let component: TestDetailsComponent;
  let fixture: ComponentFixture<TestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdCardModule, MdChipsModule, HttpModule],
      declarations: [TestDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {'params': Observable.of([{'id': 1}])}
        },
        {
          provide: TestsService,
          useValue: new MockTestsService()
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
