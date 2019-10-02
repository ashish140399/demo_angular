import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectlinkedinComponent } from './redirectlinkedin.component';

describe('RedirectlinkedinComponent', () => {
  let component: RedirectlinkedinComponent;
  let fixture: ComponentFixture<RedirectlinkedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectlinkedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectlinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
