import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TestsComponent } from './tests/tests.component';
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdListModule,
  MdMenuModule,
  MdToolbarModule,
  MdChipsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestsService } from './shared/tests.service';
import { DashboardComponent } from './dashboard.component';
import { TestDetailsComponent } from './test-details/test-details.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MdListModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdChipsModule
  ],
  declarations: [TestsComponent, TestDetailsComponent, DashboardComponent],
  providers: [TestsService]
})
export class DashboardModule {
}
