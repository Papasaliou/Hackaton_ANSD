import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLigneComponent } from './details-ligne.component';

describe('DetailsLigneComponent', () => {
  let component: DetailsLigneComponent;
  let fixture: ComponentFixture<DetailsLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsLigneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
