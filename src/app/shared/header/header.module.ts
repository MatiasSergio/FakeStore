
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from "@angular/material/toolbar";

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    HeaderComponent
  ],
   imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    HeaderComponent,
  ]
})

export class HeaderModule {}
