import { Component, Input, OnInit } from '@angular/core';
import { Objective } from 'src/app/model/objective';

@Component({
  selector: 'app-objective-item',
  templateUrl: './objective-item.component.html',
  styleUrls: ['./objective-item.component.scss']
})
export class ObjectiveItemComponent implements OnInit {

  @Input() objective!: Objective;

  constructor() { }

  ngOnInit(): void { }
}
