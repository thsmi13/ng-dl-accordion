import { of } from 'rxjs';
import { QuestionsService } from './questions.service';
import { Questions } from '../model/questions.model';

describe('QuestionsService', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let questionsService: QuestionsService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    questionsService = new QuestionsService(httpClientSpy as any);
  });

  it('should return expected questions (HttpClient called once)', () => {
    const expectedQuestions: Questions[] =
      [{ id: 1, question: 'A', answer: 'B' }, { id: 2, question: 'C', answer: 'D' }];
    httpClientSpy.get.and.returnValue(of(expectedQuestions));
    questionsService.getQuestions().subscribe(
      questions => expect(questions).toEqual(expectedQuestions, 'expected questions'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

});
