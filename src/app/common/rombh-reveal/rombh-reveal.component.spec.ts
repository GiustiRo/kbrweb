import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RombhRevealComponent } from './rombh-reveal.component';

describe('RombhRevealComponent', () => {
  let component: RombhRevealComponent;
  let fixture: ComponentFixture<RombhRevealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RombhRevealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RombhRevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
