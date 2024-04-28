import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTogglerComponent } from './feature-toggler.component';

describe('FeatureTogglerComponent', () => {
  let component: FeatureTogglerComponent;
  let fixture: ComponentFixture<FeatureTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTogglerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
