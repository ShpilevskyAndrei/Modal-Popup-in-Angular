import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { IToastOptions } from './interfaces/toast-options';

@Injectable()
export class AgroexToastDataService {
    public toastsData: BehaviorSubject<IToastOptions[]> = new BehaviorSubject<
        IToastOptions[]
    >([]);

    public addToast(config: IToastOptions): void {
        const id = Math.random();

        this.toastsData.next([{ ...config, id }, ...this.toastsData.value]);
    }

    public deleteToast(id: number | undefined): void {
        this.toastsData.next(
            this.toastsData.value.filter(
                (toast: IToastOptions) => toast.id !== id
            )
        );
    }
}
