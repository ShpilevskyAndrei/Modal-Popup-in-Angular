import { BrowserModule } from '@angular/platform-browser';
import {
    BrowserAnimationsModule,
    NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ToastComponent } from './toasts/toast/toast.component';
import { ToastDataService } from './toasts/toast-data-service';
import { ToastService } from './toasts/toast-sevice';
import { ToastsLayoutComponent } from './toasts/toasts-layout/toasts-layout.component';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        ToastComponent,
        ToastsLayoutComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        MatButtonToggleModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        NoopAnimationsModule,
        OverlayModule,
    ],
    providers: [ToastDataService, ToastService],
    bootstrap: [AppComponent],
})
export class AppModule {}
