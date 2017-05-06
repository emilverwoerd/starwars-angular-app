import { Planet } from '../planet';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sw-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  @Input() planet: Planet;
  revealModel = false;

  constructor() { }

  ngOnInit() {
  }

}
