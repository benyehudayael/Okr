import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewObjectiveFormComponent } from './new-objective-form.component';

describe('NewObjectiveFormComponent', () => {
  let component: NewObjectiveFormComponent;
  let fixture: ComponentFixture<NewObjectiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewObjectiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewObjectiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
