import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  isLoading = false;
  progress = 0;
  _timer;

  constructor() {
    /** Determinate mode: Controled/finite movement */
    this._timer = setInterval(() => {
      this.progress++;
      // tslint:disable-next-line: triple-equals
      if (this.progress == 100) { clearInterval(this._timer); }
    }, 20);

    /** Simulating backend service */
    this.isLoading = true;
    this.getCourses()
      .subscribe( x => this.isLoading = false);  // Here would be the data retrieving
  }

  getCourses() {
    return timer(25000);
  }
  ngOnInit(){}
}
