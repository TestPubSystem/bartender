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
    this.testsService.preload();

    this.subscription.add(this.testsService.all().subscribe(
      tests => {
        this.tests = tests;
      }
    ));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
