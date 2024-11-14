import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonCreateComponent } from './maison-create.component';

describe('MaisonCreateComponent', () => {
  let component: MaisonCreateComponent;
  let fixture: ComponentFixture<MaisonCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaisonCreateComponent]
    });
    fixture = TestBed.createComponent(MaisonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
