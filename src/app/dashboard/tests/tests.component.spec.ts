import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsComponent } from './tests.component';
import { MdMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TestsService } from '../shared/tests.service';
import { MockTestsService } from '../shared/mockTests.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('TestsComponent', () => {
  let component: TestsComponent;
  let fixture: ComponentFixture<TestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdMenuModule, RouterModule, RouterTestingModule],
      declarations: [TestsComponent],
      providers: [
        {
          provide: TestsService,
          useValue: new MockTestsService()
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
