import {Component} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root-container',
  template: `
    <app-root [toastData]="toastData$ | async">
    </app-root>`
})
export class AppContainerComponent {

  public toastData$: BehaviorSubject<() => void>;

  constructor() {
    this.toastData$ = new BehaviorSubject(() => console.log('13123'))
  }
}
