/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddproveeComponent } from './addprovee.component';

describe('AddproveeComponent', () => {
  let component: AddproveeComponent;
  let fixture: ComponentFixture<AddproveeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproveeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
