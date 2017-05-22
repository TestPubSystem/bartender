import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Test } from '../../../models/test';
import { TestsService } from '../../../services/tests.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {
  public test: Test;
  private subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private testsService: TestsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id: number = +params['id'];
      this.subscription.add(this.testsService.get(id, true).subscribe(
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
