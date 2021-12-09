import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategiesComponent } from './strategies.component';

const routes: Routes = [{
  path: '',
  component: StrategiesComponent,
  data: {
    title: 'Strategies'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrategiesRoutingModule { }
