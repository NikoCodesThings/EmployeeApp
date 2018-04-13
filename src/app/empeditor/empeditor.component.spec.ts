import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeditorComponent } from './empeditor.component';

describe('EmpeditorComponent', () => {
  let component: EmpeditorComponent;
  let fixture: ComponentFixture<EmpeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
