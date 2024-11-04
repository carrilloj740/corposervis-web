import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SadmitComponent } from './sadmit.component';

describe('SadmitComponent', () => {
  let component: SadmitComponent;
  let fixture: ComponentFixture<SadmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SadmitComponent]
    });
    fixture = TestBed.createComponent(SadmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
