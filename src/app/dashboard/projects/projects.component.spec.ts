import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { MdMenuModule } from '@angular/material';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProjectsService } from './shared/projects.service';
import { MockProjectsService } from './shared/mockProjects.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdMenuModule, RouterModule, RouterTestingModule],
      declarations: [ ProjectsComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {'params': Observable.of([{'id': 1}])}
        },
        {
          provide: ProjectsService,
          useValue: new MockProjectsService()
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
