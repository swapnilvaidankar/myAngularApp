import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgProductcardComponent } from './pg-productcard.component';

describe('PgProductcardComponent', () => {
  let component: PgProductcardComponent;
  let fixture: ComponentFixture<PgProductcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgProductcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgProductcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
