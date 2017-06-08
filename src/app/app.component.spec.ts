import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MdToolbarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthorizationService } from './dashboard/shared/authorization.service';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, MdToolbarModule, RouterModule, RouterTestingModule, HttpModule],
      declarations: [
        AppComponent
      ],
      providers: [AuthorizationService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
