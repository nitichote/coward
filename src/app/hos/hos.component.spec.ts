import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosComponent } from './hos.component';

describe('HosComponent', () => {
  let component: HosComponent;
  let fixture: ComponentFixture<HosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
