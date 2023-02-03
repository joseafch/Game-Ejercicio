import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GMoleComponent } from './g-mole.component';

describe('GMoleComponent', () => {
  let component: GMoleComponent;
  let fixture: ComponentFixture<GMoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GMoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GMoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
