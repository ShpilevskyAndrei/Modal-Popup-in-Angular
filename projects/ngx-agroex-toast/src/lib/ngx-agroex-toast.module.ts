import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';

import { AgroexToastComponent } from './agroex-toast/agroex-toast.component'
import { AgroexToastsLayoutComponent } from './agroex-toasts-layout/agroex-toasts-layout.component'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    AgroexToastComponent,
    AgroexToastsLayoutComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
})
export class NgxAgroexToastModule { }
