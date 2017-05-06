import { FormsModule } from '@angular/forms';
import { PlanetDetailComponent } from '../planet-detail/planet-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { MdListModule, MdCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    PlanetsRoutingModule,
    MdListModule,
    MdCheckboxModule,
  ],
  declarations: [PlanetsComponent, PlanetDetailComponent]
})
export class PlanetsModule { }
