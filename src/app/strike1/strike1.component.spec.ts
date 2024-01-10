import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strike1Component } from './strike1.component';

describe('Strike1Component', () => {
  let component: Strike1Component;
  let fixture: ComponentFixture<Strike1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Strike1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Strike1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
