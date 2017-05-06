import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { Rebel } from '../rebel';

@Component({
  selector: 'sw-rebels',
  templateUrl: './rebels.component.html',
  styleUrls: ['./rebels.component.scss']
})
export class RebelsComponent implements OnInit {
  protected title = 'Rebels';
  protected rebels: Rebel[];
  protected selectedRebel: Rebel;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRebels()
      .subscribe(rebels => this.rebels = rebels);

  }

  selectRebel(rebel: Rebel) {
    this.selectedRebel = rebel;
  };

}
