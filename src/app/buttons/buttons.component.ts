import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  minDate = new Date(2020, 0, 19); // January is the month 0
  maxDate = new Date(2020, 1, 1);
  categories = [
    { name: 'Advanced', color: 'accent' },
    { name: 'Intermediate', color: 'primary' },
    { name: 'Beginner', color: 'warm' }
  ];
  
  constructor() { }

  ngOnInit() {
  }
  selectCategory(category) {
    this.categories
      .filter(ctgry => ctgry != category)
      .forEach(filteredCategory => filteredCategory['selected'] = false);

    category.selected = !category.selected;
  }
}
