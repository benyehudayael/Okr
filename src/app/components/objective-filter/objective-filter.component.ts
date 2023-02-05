import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Department } from 'src/app/model/department';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-objective-filter',
  templateUrl: './objective-filter.component.html',
  styleUrls: ['./objective-filter.component.scss']
})
export class ObjectiveFilterComponent implements OnInit {

  @Output() onShowAddObjectiveDialog: EventEmitter<any> = new EventEmitter();
  @Output() onFilterChanged: EventEmitter<any> = new EventEmitter();

  departments: Department[] = [];
  monthYear: { year: number; month: number };
  date: NgbDateStruct;
  selectedDepartment?: Department;

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private dataService: DataService) {
    this.date = calendar.getToday();
  }

  ngOnInit(): void {
    this.dataService.getDepartments()
      .subscribe(departments => { this.departments = departments });;
  }

  openDialog(): void {
    this.onShowAddObjectiveDialog.emit();
  }

  setDepartment(dep: Department): void {
    this.selectedDepartment = dep;
  }

  reloadObjectives(): void {
    this.onFilterChanged.emit({ date: this.date, departmentId: this.selectedDepartment.id });
  }
}
