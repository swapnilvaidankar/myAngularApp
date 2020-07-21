import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgPageheaderComponent } from './pg-pageheader.component';

describe('PgPageheaderComponent', () => {
  let component: PgPageheaderComponent;
  let fixture: ComponentFixture<PgPageheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgPageheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgPageheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
