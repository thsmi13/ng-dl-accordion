import { Component, Input, ContentChild } from '@angular/core';
import { Questions } from '../model/questions.model';
import { AccordionContentComponent } from '../accordion-content/accordion-content.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'dl-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '*',
        opacity: 1
      })),
      state('closed', style({
        height: '0',
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.25s')
      ]),
      transition('closed => open', [
        animate('0.25s')
      ]),
    ]),
  ],
})
export class AccordionComponent {

  @Input() question: Questions;

  @ContentChild(AccordionContentComponent, { static: true }) content: AccordionContentComponent;

  toggle() {
    this.content.isOpen = !this.content.isOpen;
  }

  isOpen() {
    return this.content.isOpen;
  }

}
