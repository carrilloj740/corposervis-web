import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadmipComponent } from './sadmip.component';

describe('SadmipComponent', () => {
  let component: SadmipComponent;
  let fixture: ComponentFixture<SadmipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SadmipComponent]
    });
    fixture = TestBed.createComponent(SadmipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
