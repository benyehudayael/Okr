import { Component } from '@angular/core';
import { Objective } from './model/objective';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  objectives: Objective[] = [];
  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    this.dataService.getObjectives()
      .subscribe(objectives => {
        this.objectives = objectives;
      });
  }
  title = 'okr';
}
