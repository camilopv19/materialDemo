import { NgModule } from '@angular/core';
import {
  MatNativeDateModule, MatButtonModule, MatCheckboxModule, MatRadioModule,
  MatSelectModule, MatInputModule, MatIconModule, MatDatepickerModule,
  MatChipsModule, MatProgressSpinnerModule, MatTooltipModule, MatTabsModule, MatDialogModule, MAT_DIALOG_DATA
} from '@angular/material';


@NgModule({
  exports: [
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule
  ]
})
export class MatComponentsModule { }
