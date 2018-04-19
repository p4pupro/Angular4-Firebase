/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddpresComponent } from './addpres.component';

describe('AddpresComponent', () => {
  let component: AddpresComponent;
  let fixture: ComponentFixture<AddpresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
