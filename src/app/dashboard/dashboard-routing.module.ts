import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { TestComponent } from './test/test.component';
import { AuthorizationGuard } from './shared/authorization.guard';
import { TestsComponent } from './tests/tests.component';

const routes: Routes = [{
  path: '', component: DashboardComponent, canActivate: [AuthorizationGuard],
  children: [
    {path: 'project/:id', component: TestsComponent},
    {path: 'project/:projectId/test/:testId', component: TestDetailsComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
