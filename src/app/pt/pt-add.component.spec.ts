import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtAddComponent } from './pt-add.component';

describe('PtAddComponent', () => {
  let component: PtAddComponent;
  let fixture: ComponentFixture<PtAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
