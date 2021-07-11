import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WAreaComponent } from './w-area.component';

describe('WAreaComponent', () => {
  let component: WAreaComponent;
  let fixture: ComponentFixture<WAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
