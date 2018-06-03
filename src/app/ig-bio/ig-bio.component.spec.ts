import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgBioComponent } from './ig-bio.component';

describe('IgBioComponent', () => {
  let component: IgBioComponent;
  let fixture: ComponentFixture<IgBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
