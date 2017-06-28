import { Component, OnDestroy } from '@angular/core';
import { Test } from '../shared/test.model';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { TestsService } from '../shared/tests.service';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnDestroy {

  public test: Test;
  private subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private testsService: TestsService) {
    this.route.params.subscribe(params => {
      const projectId: number = +params['projectId'];
      const testId: number = +params['testId'];
      this.subscription.add(this.testsService.get(testId, true).subscribe(
        test => {
          this.test = test;
        }
      ));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
