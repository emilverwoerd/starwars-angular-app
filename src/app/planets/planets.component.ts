import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';

@Component({
  selector: 'sw-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  title = 'Planets';
  planets: Planet[];
  selectedPlanet: Planet;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPlanets()
      .subscribe(planets => this.planets = planets);

  }

  selectPlanet(planet: Planet) {
    this.selectedPlanet = planet;
  };
}
