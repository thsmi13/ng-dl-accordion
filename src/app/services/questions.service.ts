import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questions } from '../model/questions.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  configUrl = 'assets/faqs.json';

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get<Questions[]>(this.configUrl);
  }
}
