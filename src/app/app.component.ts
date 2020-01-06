import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditCourseComponent } from './edit-course/edit-course.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog){
  }

  openDialog(){
    this.dialog.open(EditCourseComponent, {
      data: {
        // DOM to Dialog data
        courseId: 666
      }
    })
    .afterClosed()
    .subscribe( m => console.log(m));
  }
}
