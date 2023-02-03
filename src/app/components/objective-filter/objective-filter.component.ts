import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-objective-filter',
  templateUrl: './objective-filter.component.html',
  styleUrls: ['./objective-filter.component.scss']
})
export class ObjectiveFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('myModal', { static: false })
  myModal!: ElementRef;
  elm!: HTMLElement;
  ngAfterViewInit(): void {
    this.elm = this.myModal.nativeElement as HTMLElement;
  }
  closeDialog(): void {
    this.elm.classList.remove('show');
    setTimeout(() => {
      this.elm.style.width = '0';
    }, 75);
  }
  openDialog(): void {
    this.elm.classList.add('show');
    this.elm.style.width = '100vw';
  }

}
