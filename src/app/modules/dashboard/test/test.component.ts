import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Test } from '../../../models/test';
import { TestsService } from '../../../services/tests.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public test: Test;

  constructor(private route: ActivatedRoute,
              private testsService: TestsService) {
    this.route.params.subscribe(params => {
      const id: number = +params['id'];
      this.test = this.testsService.get(id);
    });
  }

  ngOnInit() {
  }

}
