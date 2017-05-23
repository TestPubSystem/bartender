import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TestDetailsComponent } from './test-details/test-details.component';

const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [
    {path: 'test/:id', component: TestDetailsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
