import { DataService } from '../data.service';
import { Planet } from '../planet';
import { Rebel } from '../rebel';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-rebel-detail',
  templateUrl: './rebel-detail.component.html',
  styleUrls: ['./rebel-detail.component.scss']
})
export class RebelDetailComponent implements OnInit {
  @Input() rebel: Rebel;
  planets: Planet[];
  revealModel = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPlanets()
      // .then(planets => this.planets = planets);
      .subscribe(planets => this.planets = planets);
  }

}
