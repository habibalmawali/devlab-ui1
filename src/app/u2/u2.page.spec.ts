import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U2Page } from './u2.page';

describe('U2Page', () => {
  let component: U2Page;
  let fixture: ComponentFixture<U2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
