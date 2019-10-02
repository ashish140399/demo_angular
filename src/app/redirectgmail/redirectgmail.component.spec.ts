import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectgmailComponent } from './redirectgmail.component';

describe('RedirectgmailComponent', () => {
  let component: RedirectgmailComponent;
  let fixture: ComponentFixture<RedirectgmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectgmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectgmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
