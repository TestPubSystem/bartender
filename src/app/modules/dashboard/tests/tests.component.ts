import { Component, OnDestroy } from '@angular/core';
import { TestsService } from '../../../services/tests.service';
import { Subscription } from 'rxjs/Subscription';
import { Test } from '../../../models/test';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css'],
})
export class TestsComponent implements OnDestroy {
  private subscription: Subscription = new Subscription();
  public tests: Test[];

  constructor(private testsService: TestsService) {
    this.subscription.add(this.testsService.all(true).subscribe(
      tests => {
        this.tests = tests;
      }
    ));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
