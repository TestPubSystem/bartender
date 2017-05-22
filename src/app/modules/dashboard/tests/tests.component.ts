import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestsService } from '../../../services/tests.service';
import { Subscription } from 'rxjs/Subscription';
import { Test } from '../../../models/test';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css'],
})
export class TestsComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public tests: Test[];

  constructor(private testsService: TestsService) {
  }

  ngOnInit() {
    this.testsService.all(true);

    this.subscription.add(this.testsService.all().subscribe(
      tests => {
        this.tests = tests;
      }
    ));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
