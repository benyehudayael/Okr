import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveFilterComponent } from './objective-filter.component';

describe('ObjectiveFilterComponent', () => {
  let component: ObjectiveFilterComponent;
  let fixture: ComponentFixture<ObjectiveFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectiveFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
