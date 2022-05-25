import {NgModule, TemplateRef, ViewContainerRef} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {Overlay, OverlayConfig, OverlayModule} from '@angular/cdk/overlay';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToastComponent } from "./toasts/toast/toast.component";
import { ToastsLayoutComponent } from "./toasts/toasts-layout/toasts-layout.component";

import { MatCardModule } from "@angular/material/card";



@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    ToastsLayoutComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    OverlayModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
