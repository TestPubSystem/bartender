import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestsComponent } from './tests/tests.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{
  path: '', component: TestsComponent,
  children: [
    {path: 'test/:id', component: TestComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
