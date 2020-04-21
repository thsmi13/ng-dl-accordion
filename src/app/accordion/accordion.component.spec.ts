import { AccordionComponent } from './accordion.component';
import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { Questions } from '../model/questions.model';
import { Component, ContentChild, ViewChild } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionContentComponent } from '../accordion-content/accordion-content.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';


@Component({
  selector: 'dl-test-cmp',
  template: `<dl-accordion [question]='question'>
  <dl-accordion-content>
    {{question.answer}}
  </dl-accordion-content>
</dl-accordion>`,
})
class TestWrapperComponent {
  isOpen = false;
  question: Questions = {
    id: 1, question: 'A', answer: 'B'
  };
}

describe('AccordionComponent', () => {

  let component: AccordionComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionComponent, TestWrapperComponent, AccordionContentComponent],
      imports: [BrowserAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.debugElement.children[0].componentInstance;
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should toggle open', fakeAsync(() => {
    fixture.detectChanges();
    component.toggle();
    tick();
    expect(component.isOpen()).toBe(true);
    console.log(component.isOpen());
    component.toggle();
    tick();
    expect(component.isOpen()).toBe(false);
  }));

});
