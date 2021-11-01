import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndSectionComponent } from './end-section.component';

describe('EndSectionComponent', () => {
  let component: EndSectionComponent;
  let fixture: ComponentFixture<EndSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
