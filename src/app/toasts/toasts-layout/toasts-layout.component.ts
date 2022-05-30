import { Component } from '@angular/core';
import { Observable } from "rxjs";

import { IToastOptions } from "../interfaces/toast-options";
import { ToastDataService } from "../toast-data-service";

@Component({
  selector: 'app-toasts-layout',
  templateUrl: './toasts-layout.component.html',
  styleUrls: ['./toasts-layout.component.scss']
})
export class ToastsLayoutComponent {
  public toasts$: Observable<IToastOptions[] | null> = this.toastDataService.toastsData.asObservable()

  constructor(private toastDataService: ToastDataService) {
  }

}
