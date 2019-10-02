import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectfbComponent } from './redirectfb.component';

describe('RedirectfbComponent', () => {
  let component: RedirectfbComponent;
  let fixture: ComponentFixture<RedirectfbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectfbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectfbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
