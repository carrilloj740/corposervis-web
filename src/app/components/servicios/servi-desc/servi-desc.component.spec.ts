import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiDescComponent } from './servi-desc.component';

describe('ServiDescComponent', () => {
  let component: ServiDescComponent;
  let fixture: ComponentFixture<ServiDescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiDescComponent]
    });
    fixture = TestBed.createComponent(ServiDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
