import { BrowserModule } from '@angular/platform-browser';
import {
    BrowserAnimationsModule,
    NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NgxAgroexToastModule } from '../../projects/ngx-agroex-toast/src/lib/ngx-agroex-toast.module';

@NgModule({
    declarations: [FormComponent, AppComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        NgxAgroexToastModule,
        NoopAnimationsModule,
        OverlayModule,
        ReactiveFormsModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
