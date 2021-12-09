import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrategiesRoutingModule } from './strategies-routing.module';
import { StrategiesComponent } from './strategies.component';


@NgModule({
  declarations: [
    StrategiesComponent
  ],
  imports: [
    CommonModule,
    StrategiesRoutingModule
  ]
})
export class StrategiesModule { }
