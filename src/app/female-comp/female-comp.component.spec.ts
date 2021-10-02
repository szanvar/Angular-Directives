import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleCompComponent } from './female-comp.component';

describe('FemaleCompComponent', () => {
  let component: FemaleCompComponent;
  let fixture: ComponentFixture<FemaleCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FemaleCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FemaleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
