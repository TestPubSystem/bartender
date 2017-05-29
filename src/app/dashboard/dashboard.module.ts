import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TestsComponent } from './tests/tests.component';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestsService } from './shared/tests.service';
import { DashboardComponent } from './dashboard.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    MdChipsModule,
    MdInputModule,
    FormsModule,
    ReactiveFormsModule,
    MdAutocompleteModule
  ],
  declarations: [TestsComponent, TestDetailsComponent, DashboardComponent, TestComponent],
  providers: [TestsService]
})
export class DashboardModule {
}
