import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisuelTrisComponent } from './visuel-tris.component';

describe('VisuelTrisComponent', () => {
  let component: VisuelTrisComponent;
  let fixture: ComponentFixture<VisuelTrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisuelTrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisuelTrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
