import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
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
  declarations: [HomeComponent],
  providers: [TestsService]
})
export class DashboardModule {
}
