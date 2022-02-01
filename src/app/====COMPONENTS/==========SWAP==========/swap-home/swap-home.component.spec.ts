import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapHomeComponent } from './swap-home.component';

describe('SwapHomeComponent', () => {
  let component: SwapHomeComponent;
  let fixture: ComponentFixture<SwapHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
