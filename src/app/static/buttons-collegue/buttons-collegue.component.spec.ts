import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsCollegueComponent } from './buttons-collegue.component';

describe('ButtonsCollegueComponent', () => {
  let component: ButtonsCollegueComponent;
  let fixture: ComponentFixture<ButtonsCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
