import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HistoryApp';
  @ViewChild('modal', { static: true }) modal: ElementRef;
  public modalElem: HTMLElement;
  ngOnInit(): void {
    this.modalElem = this.modal.nativeElement as HTMLElement;
  }
  animateBtn(btnText: string) {
    console.log(btnText);
    this.modalElem.classList.remove('out');
    this.modalElem.classList.add('one');
  }

  closeModal(event: Event) {
    let target = event.target as HTMLElement;
    if (target.classList[0] === "modal-background") {
      this.modalElem.classList.add('one');
      this.modalElem.classList.add('out');
    }
  }

}
