import { Component, Input, OnInit } from '@angular/core';
import { Project } from './shared/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Project[];

  constructor() {
  }

  ngOnInit() {
  }

}
