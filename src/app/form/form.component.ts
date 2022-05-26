import {Component} from '@angular/core';
import {ToastDataService} from "../toasts/toast-data-service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(private toastService: ToastDataService) {
  }

  public toastOption: any = {
    toastType: '',
    width: '',
    title: '',
    addMessage: '',
    message: '',
    addButton: '',
    buttonText: '',
  }

  returnToastOptions(): void {
    this.toastService.toastsData.next({...this.toastOption})
    console.log(this.toastOption)
  }
}
