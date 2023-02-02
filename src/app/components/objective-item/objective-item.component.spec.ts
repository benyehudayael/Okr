import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveItemComponent } from './objective-item.component';

describe('ObjectiveItemComponent', () => {
  let component: ObjectiveItemComponent;
  let fixture: ComponentFixture<ObjectiveItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectiveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
