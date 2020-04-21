import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionContentComponent } from './accordion-content/accordion-content.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsService } from './services/questions.service';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
