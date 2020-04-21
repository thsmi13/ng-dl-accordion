import { AppComponent } from './app.component';
import { Questions } from './model/questions.model';
import { of } from 'rxjs';

describe('AppComponent', () => {

  let comp: AppComponent;
  let expectedQuestions: Questions[];
  let mockQuestionService: any;
  let getQuestionsSpy: any;

  beforeEach((done: DoneFn) => {
    expectedQuestions = [{ id: 1, question: 'A', answer: 'B' }, { id: 2, question: 'C', answer: 'D' }];
    mockQuestionService = jasmine.createSpyObj('QuestionsService', ['getQuestions']);
    getQuestionsSpy = mockQuestionService.getQuestions.and.returnValue(of(expectedQuestions));
    comp = new AppComponent(mockQuestionService);
    comp.ngOnInit();
    mockQuestionService.getQuestions.calls.first().returnValue.subscribe(done);
  });

  it('should expose the questions retrieved from the QuestionService', () => {
    expect(comp.questions).toBe(expectedQuestions);
  });

});
