import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonListComponent } from './maison-list.component';

describe('MaisonListComponent', () => {
  let component: MaisonListComponent;
  let fixture: ComponentFixture<MaisonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaisonListComponent]
    });
    fixture = TestBed.createComponent(MaisonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
