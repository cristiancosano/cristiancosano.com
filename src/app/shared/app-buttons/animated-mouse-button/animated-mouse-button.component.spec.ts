import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedMouseButtonComponent } from './animated-mouse-button.component';

describe('AnimatedMouseButtonComponent', () => {
  let component: AnimatedMouseButtonComponent;
  let fixture: ComponentFixture<AnimatedMouseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedMouseButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedMouseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
