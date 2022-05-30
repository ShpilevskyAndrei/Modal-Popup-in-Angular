import {Component, Input} from '@angular/core';
import {IToastOptions} from "./toasts/interfaces/toast-options";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() public toastData: any

  title = 'Loading...';
}
