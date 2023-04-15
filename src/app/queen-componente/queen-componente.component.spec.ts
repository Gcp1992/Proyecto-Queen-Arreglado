import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueenComponenteComponent } from './queen-componente.component';

describe('QueenComponenteComponent', () => {
  let component: QueenComponenteComponent;
  let fixture: ComponentFixture<QueenComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueenComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueenComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
