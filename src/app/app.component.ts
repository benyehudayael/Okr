import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DateRange } from './model/dateRange';
import { Objective } from './model/objective';
import { Person } from './model/person';
import { Privacy } from './model/privacy';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('modalBackdrop', { static: false }) backdrop!: ElementRef;
  @ViewChild('myModal', { static: false }) modal!: ElementRef;
  modalElm!: HTMLElement;
  backdropElm!: HTMLElement;
  newObjective: Objective = new Objective('', null, null, Privacy.Personal)

  objectives: BehaviorSubject<Objective[]> = new BehaviorSubject<Objective[]>(null);
  objectives$: Observable<Objective[]> = this.objectives.asObservable();

  title = 'okr';

  constructor(private dataService: DataService) { }

  ngOnInit(): void { }

  reloadObjectives(e: any): void {
    this.dataService.getObjectives(e.date, e.departmentId)
      .subscribe(objectives => {
        this.objectives.next(objectives);
      });
  }

  ngAfterViewInit(): void {
    this.backdropElm = this.backdrop.nativeElement as HTMLElement;
    this.modalElm = this.modal.nativeElement as HTMLElement;
  }

  closeDialog(): void {
    this.backdropElm.classList.remove('show');
    this.modalElm.classList.remove('show');
  }

  openDialog(): void {
    this.backdropElm.classList.add('show');
    this.modalElm.classList.add('show');
  }

  createObjective(): void {
    var obj = Object.assign({}, this.newObjective);
    this.dataService.addNewObjective(obj).subscribe(objectives => { });
    this.closeDialog();
    this.newObjective = new Objective('', null, null, Privacy.Personal);
  }
}