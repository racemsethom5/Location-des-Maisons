import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonDetailsComponent } from './maison-details.component';

describe('MaisonDetailsComponent', () => {
  let component: MaisonDetailsComponent;
  let fixture: ComponentFixture<MaisonDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaisonDetailsComponent]
    });
    fixture = TestBed.createComponent(MaisonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
