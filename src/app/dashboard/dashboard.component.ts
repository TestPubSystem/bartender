import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects/shared/projects.service';
import { Project } from './projects/shared/project.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ProjectsService]
})
export class DashboardComponent implements OnInit {
  public projects: Project[];
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.all(true).subscribe(
      projects => {
        this.projects = projects;
      }
    );
  }

}
