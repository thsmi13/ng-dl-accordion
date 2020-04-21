import { Component, OnInit } from '@angular/core';
import { Questions } from './model/questions.model';
import { QuestionsService } from './services/questions.service';

@Component({
  selector: 'dl-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  questions: Questions[];

  constructor(private questionsService: QuestionsService) {
  }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questionsService.getQuestions().subscribe((res) => {
      this.questions = res;
    }
    );
  }
}
