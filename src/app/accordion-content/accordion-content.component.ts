import { Component, Input } from '@angular/core';

@Component({
  selector: 'dl-accordion-content',
  templateUrl: './accordion-content.component.html'
})
export class AccordionContentComponent {

  private _isOpen: boolean;
  @Input() public get isOpen() {
    return this._isOpen;
  }

  public set isOpen(val: boolean) {
    this._isOpen = val;
  }

}

