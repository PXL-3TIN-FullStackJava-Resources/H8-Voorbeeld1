import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilizationItemComponent } from './civilization-item.component';

describe('CivilizationItemComponent', () => {
  let component: CivilizationItemComponent;
  let fixture: ComponentFixture<CivilizationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilizationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilizationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
