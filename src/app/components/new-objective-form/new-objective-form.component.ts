import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Department } from 'src/app/model/department';
import { Objective } from 'src/app/model/objective';
import { Person } from 'src/app/model/person';
import { Privacy } from 'src/app/model/privacy';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-new-objective-form',
	templateUrl: './new-objective-form.component.html',
	styleUrls: ['./new-objective-form.component.scss']
})
export class NewObjectiveFormComponent implements OnInit {

	@Input() newObjective: Objective;
	assignees: Person[];
	Privacy = Privacy;
	assigneeHeader: string = "Assignee";
	privacyTitle: string = "Select privacy";
	departments: Department[]
	departmentLookup: any = {};
	hoveredDate: NgbDate | null = null;

	fromDate: NgbDate | null;
	toDate: NgbDate | null;

	constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private dataService: DataService) {
		this.fromDate = calendar.getToday();
		this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
	}

	ngOnInit(): void {
		var that = this;
		this.dataService.getDepartments().subscribe(deps => {
			this.departments = deps;
			deps.forEach(x => that.departmentLookup[x.id.toString()] = x.title);
			this.dataService.getPersons().subscribe(assignees => { this.assignees = assignees });
		});
	}

	onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
			this.toDate = date;
			this.newObjective.dateRange = {
				startDate: new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day),
				endDate: new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day)
			}
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}

	validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
		const parsed = this.formatter.parse(input);
		return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
	}
	setAssignee(assignee: Person) {
		if (assignee.fullName == this.assigneeHeader) {
			this.assigneeHeader = "Assignee"
			this.newObjective.assignee = undefined;
		} else {
			this.newObjective.assignee = assignee;
			this.assigneeHeader = assignee.fullName;
		}
	}
	setPrivacy(privacy: string) {
		this.newObjective.privacy = Privacy[privacy];
		this.privacyTitle = privacy;
	}

	privacies: string[] = Object.keys(Privacy).map(key => Privacy[key]).filter(value => typeof value === 'string')
}
