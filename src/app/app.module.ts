import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastComponent } from './toasts/toast/toast.component';
import { ToastsLayoutComponent } from './toasts/toasts-layout/toasts-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    ToastsLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
