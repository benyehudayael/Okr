import { Component, ElementRef, ViewChild } from '@angular/core';
import { Objective } from './model/objective';
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

  objectives: Objective[] = [];
  title = 'okr';

  constructor(private dataService: DataService) {

  }
  
  ngOnInit(): void {
    this.dataService.getObjectives()
      .subscribe(objectives => {
        this.objectives = objectives;
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

  createObjective():void {
    
  }
}