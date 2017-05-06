import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { MdListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    MdListModule
  ],
  declarations: [PlanetsComponent]
})
export class PlanetsModule { }
