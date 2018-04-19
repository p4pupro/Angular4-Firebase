/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddfraComponent } from './addfra.component';

describe('AddfraComponent', () => {
  let component: AddfraComponent;
  let fixture: ComponentFixture<AddfraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
