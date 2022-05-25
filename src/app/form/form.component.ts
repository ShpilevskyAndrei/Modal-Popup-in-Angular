import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Output() toastOption: any = {
    toastType: '' ,
    width: '',
    title: '',
    addMessage: '',
    message: '',
    addButton: '',
    buttonText: '',
  }

  formTest(){
    console.log(this.toastOption);
  }
}
