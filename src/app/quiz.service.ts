import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuizData(): Observable<any> {
    const mockData = {
      questions: [
        {
          id: 1,
          questionText: 'What is the capital of France?',
          answerType: 'radio',
          options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
          correctAnswer: 'Paris',
          timeLimit: 30
        },
        {
          id: 2,
          questionText: 'Select the prime numbers',
          answerType: 'checkbox',
          options: ['2', '3', '4', '9'],
          correctAnswer: ['2', '3'],
          timeLimit: 45
        },
        {
          id: 3,
          questionText: 'Choose the correct color of the sky',
          answerType: 'dropdown',
          options: ['Red', 'Blue', 'Green', 'Yellow'],
          correctAnswer: 'Blue',
          timeLimit: 20
        },
        {
          id: 4,
          questionText: 'What is 2 + 2?',
          answerType: 'radio',
          options: ['3', '4', '5', '6'],
          correctAnswer: '4',
          timeLimit: 15
        },
        {
          id: 5,
          questionText: 'Select the even numbers',
          answerType: 'checkbox',
          options: ['1', '2', '3', '4'],
          correctAnswer: ['2', '4'],
          timeLimit: 30
        },
        {
          id: 6,
          questionText: 'Choose the correct fruit',
          answerType: 'dropdown',
          options: ['Apple', 'Carrot', 'Potato', 'Lettuce'],
          correctAnswer: 'Apple',
          timeLimit: 20
        },
        {
          id: 7,
          questionText: 'What is the capital of Italy?',
          answerType: 'radio',
          options: ['Rome', 'Berlin', 'Madrid', 'Paris'],
          correctAnswer: 'Rome',
          timeLimit: 30
        },
        {
          id: 8,
          questionText: 'Select the colors of the rainbow',
          answerType: 'checkbox',
          options: ['Red', 'Brown', 'Blue', 'Black'],
          correctAnswer: ['Red', 'Blue'],
          timeLimit: 45
        },
        {
          id: 9,
          questionText: 'Choose the correct ocean',
          answerType: 'dropdown',
          options: ['Atlantic', 'Sahara', 'Amazon', 'Himalayas'],
          correctAnswer: 'Atlantic',
          timeLimit: 20
        },
        {
          id: 10,
          questionText: 'What is 5 + 3?',
          answerType: 'radio',
          options: ['7', '8', '9', '10'],
          correctAnswer: '8',
          timeLimit: 15
        }
      ]

    };
    return of(mockData);
  }
}
