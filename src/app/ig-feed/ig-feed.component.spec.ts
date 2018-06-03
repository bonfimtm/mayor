import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgFeedComponent } from './ig-feed.component';

describe('InstafeedComponent', () => {
  let component: IgFeedComponent;
  let fixture: ComponentFixture<IgFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
