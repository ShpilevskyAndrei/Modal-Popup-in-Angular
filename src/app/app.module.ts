import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatIconModule} from "@angular/material/icon";
import {OverlayModule} from '@angular/cdk/overlay';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {ToastDataService} from "./toasts/toast-data-service";
import {ToastComponent} from "./toasts/toast/toast.component";
import {ToastsLayoutComponent} from "./toasts/toasts-layout/toasts-layout.component";

import {MatCardModule} from "@angular/material/card";
import {FormComponent} from './form/form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";


@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    ToastsLayoutComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    OverlayModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatButtonToggleModule,
  ],
  providers: [ToastDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
