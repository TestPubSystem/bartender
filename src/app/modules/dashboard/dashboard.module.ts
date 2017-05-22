import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TestsComponent } from './tests/tests.component';
import { MdListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestsService } from '../../services/tests.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MdListModule,
    FlexLayoutModule
  ],
  declarations: [TestsComponent],
  providers: [TestsService]
})
export class DashboardModule {
}
