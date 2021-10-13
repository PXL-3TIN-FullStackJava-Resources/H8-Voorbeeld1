import { Component, Input, OnInit } from '@angular/core';
import { Civilization } from 'src/app/shared/models/civilization.model';
import { Aoe2Service } from 'src/app/shared/services/aoe2.service';

@Component({
  selector: 'app-civilization-item',
  templateUrl: './civilization-item.component.html',
  styleUrls: ['./civilization-item.component.css']
})
export class CivilizationItemComponent implements OnInit {
  @Input() civ!: Civilization;
  constructor(private aoe2: Aoe2Service) { }

  ngOnInit(): void {
  }

  getUniqueUnit(): void{
    this.aoe2.getUniqueUnit(this.civ.unique_unit[0]).subscribe(data => console.log(data));
  }

}
