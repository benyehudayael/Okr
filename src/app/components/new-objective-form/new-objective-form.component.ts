import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-objective-form',
  templateUrl: './new-objective-form.component.html',
  styleUrls: ['./new-objective-form.component.scss']
})
export class NewObjectiveFormComponent implements OnInit {

  constructor() { }
  form = new FormGroup({
    description: new FormControl('', Validators.required),
    datePicker: new FormControl('', Validators.required),
    assignies: new FormControl('', Validators.required),
    privacy: new FormControl('', Validators.required)
  });
  ngOnInit(): void {

  }


}
