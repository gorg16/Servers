import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSuccessComponent } from './dialog-success.component';

describe('DialogSuccessComponent', () => {
  let component: DialogSuccessComponent;
  let fixture: ComponentFixture<DialogSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
