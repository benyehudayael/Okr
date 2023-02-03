import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-objective-filter',
  templateUrl: './objective-filter.component.html',
  styleUrls: ['./objective-filter.component.scss']
})
export class ObjectiveFilterComponent implements OnInit {

  @Output() onShowAddObjectiveDialog: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  // @ViewChild('myModal', { static: false })
  // myModal!: ElementRef;
  // elm!: HTMLElement;
  // ngAfterViewInit(): void {
  //   this.elm = this.myModal.nativeElement as HTMLElement;
  // }
  // closeDialog(): void {
  //   this.elm.classList.remove('show');
  //   setTimeout(() => {
  //     this.elm.style.width = '0';
  //   }, 75);
  // }
  openDialog(): void {
    this.onShowAddObjectiveDialog.emit();
  }
}
