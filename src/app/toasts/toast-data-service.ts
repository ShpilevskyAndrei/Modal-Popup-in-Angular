import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { IToastOptions } from './interfaces/toast-options';

@Injectable()
export class ToastDataService {
    public toastsData: BehaviorSubject<IToastOptions[]> = new BehaviorSubject<
        IToastOptions[]
    >([]);

    public addToast(config: IToastOptions): void {
        const id = Math.random();
        this.toastsData.next([{ ...config, id }, ...this.toastsData.value]);
        console.log({ ...config, id });

        setTimeout(() => this.deleteToast(id), config.timeOut || 5000);
    }

    public deleteToast(id: number | undefined): void {
        this.toastsData.next(
            this.toastsData.value.filter(
                (eachToast: IToastOptions) => eachToast.id !== id
            )
        );
    }
}
