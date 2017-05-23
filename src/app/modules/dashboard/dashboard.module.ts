import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TestsComponent } from './tests/tests.component';
import {
  MdCardModule, MdButton, MdListModule, MdToolbarModule, MdButtonModule, MdIconModule,
  MdMenu, MdMenuModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestsService } from '../../services/tests.service';
import { TestComponent } from './test/test.component';

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
    MdMenuModule
  ],
  declarations: [TestsComponent, TestComponent],
  providers: [TestsService]
})
export class DashboardModule {
}
