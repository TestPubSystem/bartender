import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { TestsComponent } from './tests/tests.component';
import { MdMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TestsService } from './shared/tests.service';
import { MockTestsService } from './shared/mockTests.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdMenuModule, RouterModule, RouterTestingModule],
      declarations: [TestsComponent, DashboardComponent],
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
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
