import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBlurbComponent } from './user-blurb.component';

describe('UserBlurbComponent', () => {
  let component: UserBlurbComponent;
  let fixture: ComponentFixture<UserBlurbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBlurbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
