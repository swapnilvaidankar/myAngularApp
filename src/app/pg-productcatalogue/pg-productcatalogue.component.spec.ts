import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgProductcatalogueComponent } from './pg-productcatalogue.component';

describe('PgProductcatalogueComponent', () => {
  let component: PgProductcatalogueComponent;
  let fixture: ComponentFixture<PgProductcatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgProductcatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgProductcatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
