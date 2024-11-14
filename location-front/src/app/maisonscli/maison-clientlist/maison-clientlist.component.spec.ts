import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonClientlistComponent } from './maison-clientlist.component';

describe('MaisonClientlistComponent', () => {
  let component: MaisonClientlistComponent;
  let fixture: ComponentFixture<MaisonClientlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaisonClientlistComponent]
    });
    fixture = TestBed.createComponent(MaisonClientlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
