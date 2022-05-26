import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IToastOptions} from "./interfaces/toast-options";


@Injectable()
export class ToastDataService {
  public toastsData: BehaviorSubject<IToastOptions | null> =
    new BehaviorSubject<IToastOptions | null>(null)

  constructor() {}

}
