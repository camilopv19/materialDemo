import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';  // In case of no Animations

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputsComponent } from './inputs/inputs.component';
import { Inputs2Component } from './inputs2/inputs2.component';
import { TooltipTabsComponent } from './tooltip-tabs/tooltip-tabs.component';
import { EditCourseComponent} from './edit-course/edit-course.component';
import { CourseService } from './course.service';
import { MatComponentsModule } from './mat-components/mat-components.module';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    ButtonsComponent,
    InputsComponent,
    Inputs2Component,
    TooltipTabsComponent,
    EditCourseComponent
  ],
  entryComponents: [
    // For those components added dynamically or not "hard-coded" in any HTML template
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule
  ],
  providers: [
    CourseService,
    // Long, detailed way of the same thing as last line:
    { provide: CourseService, useClass: CourseService },
    // { provide: MAT_DIALOG_DATA, useValue: {} } //Already imported in the MatDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
