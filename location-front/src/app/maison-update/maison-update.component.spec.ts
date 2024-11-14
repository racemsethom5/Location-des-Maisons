import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonUpdateComponent } from './maison-update.component';

describe('MaisonUpdateComponent', () => {
  let component: MaisonUpdateComponent;
  let fixture: ComponentFixture<MaisonUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaisonUpdateComponent]
    });
    fixture = TestBed.createComponent(MaisonUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
