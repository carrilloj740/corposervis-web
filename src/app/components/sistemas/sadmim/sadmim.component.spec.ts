import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadmimComponent } from './sadmim.component';

describe('SadmimComponent', () => {
  let component: SadmimComponent;
  let fixture: ComponentFixture<SadmimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SadmimComponent]
    });
    fixture = TestBed.createComponent(SadmimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
