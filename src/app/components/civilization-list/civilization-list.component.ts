import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Civilization } from 'src/app/shared/models/civilization.model';
import { Aoe2Service } from 'src/app/shared/services/aoe2.service';

@Component({
  selector: 'app-civilization-list',
  templateUrl: './civilization-list.component.html',
  styleUrls: ['./civilization-list.component.css']
})
export class CivilizationListComponent implements OnInit {
  civilizations$!: Observable<Civilization[]>;

  constructor(private aoe2: Aoe2Service) { }

  ngOnInit(): void {
    this.civilizations$ = this.aoe2.getCivilizations();
  }

}
