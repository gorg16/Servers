import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiCdDetailsComponent } from './ci-cd-details.component';

describe('CiCdDetailsComponent', () => {
  let component: CiCdDetailsComponent;
  let fixture: ComponentFixture<CiCdDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiCdDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiCdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
