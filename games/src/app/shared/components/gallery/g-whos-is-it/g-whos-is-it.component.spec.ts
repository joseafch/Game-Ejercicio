import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GWhosIsItComponent } from './g-whos-is-it.component';

describe('GWhosIsItComponent', () => {
  let component: GWhosIsItComponent;
  let fixture: ComponentFixture<GWhosIsItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GWhosIsItComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GWhosIsItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
