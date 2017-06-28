import { Component, OnDestroy } from '@angular/core';
import { TestsService } from '../shared/tests.service';
import { Subscription } from 'rxjs/Subscription';
import { Test } from '../shared/test.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css'],
})
export class TestsComponent implements OnDestroy {
  private subscription: Subscription = new Subscription();
  public tests: Test[];

  constructor(private testsService: TestsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const id: number = +params['id'];
      this.subscription.add(
        this.testsService.all(id, true).subscribe(
          tests => {
            this.tests = tests;
          }
        ));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
