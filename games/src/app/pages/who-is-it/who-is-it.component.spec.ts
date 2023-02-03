import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsITComponent } from './who-is-it.component';

describe('WhoIsITComponent', () => {
  let component: WhoIsITComponent;
  let fixture: ComponentFixture<WhoIsITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoIsITComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoIsITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
