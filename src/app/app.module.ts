import { BrowserModule } from '@angular/platform-browser';
import {
    BrowserAnimationsModule,
    NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
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
import { AgroexToastComponent } from './agroex-toasts/agroex-toast/agroex-toast.component';
import { AgroexToastDataService } from './agroex-toasts/agroex-toast-data.service';
import { AgroexToastService } from './agroex-toasts/agroex-toast.service';
import { AgroexToastsLayoutComponent } from './agroex-toasts/agroex-toasts-layout/agroex-toasts-layout.component';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        AgroexToastComponent,
        AgroexToastsLayoutComponent,
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
        MatButtonModule,
    ],
    providers: [AgroexToastDataService, AgroexToastService],
    bootstrap: [AppComponent],
})
export class AppModule {}
