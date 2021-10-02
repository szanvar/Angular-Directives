import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleCompComponent } from './male-comp.component';

describe('MaleCompComponent', () => {
  let component: MaleCompComponent;
  let fixture: ComponentFixture<MaleCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaleCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
