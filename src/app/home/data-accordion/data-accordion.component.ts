import { Component } from '@angular/core';

/**
 * This component is responsible for handling the data accordions 
 */
@Component({
  selector: 'app-data-accordion',
  templateUrl: './data-accordion.component.html',
  styleUrls: ['./data-accordion.component.scss']
})
export class DataAccordionComponent {
  
  // (b/324234): This is the temporary data for the accordions
  items = ['Data Item1', 'Data Item 2', 'Data Item 3', 'Data Item 4', 'Data Item 5'];
  expandedIndex = 0;
}
