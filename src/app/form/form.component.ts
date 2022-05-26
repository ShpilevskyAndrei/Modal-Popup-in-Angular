import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Output() formClicked: EventEmitter<any> = new EventEmitter<any>()

  toastOption: any = {
    toastType: '' ,
    width: '',
    title: '',
    addMessage: '',
    message: '',
    addButton: '',
    buttonText: '',
  }

  returnToastOptions (): void {
    this.formClicked.emit(this.toastOption);
    console.log(this.toastOption)
  }
}
