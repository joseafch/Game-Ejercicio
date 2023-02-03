import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TGalleryComponent } from './t-gallery.component';

describe('TGalleryComponent', () => {
  let component: TGalleryComponent;
  let fixture: ComponentFixture<TGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
