import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { QuizService } from '../quiz.service';
import { MatDialog } from '@angular/material/dialog';
import { MarksDialogComponent } from '../marks-dialog/marks-dialog.component';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnDestroy {
  sessionDuration = 1 * 15;
  timeRemaining: number = 0;
  timerSubscription: Subscription = new Subscription();
  marks: number = 0;
  quizData: any;
  questionForm!: FormGroup;

  constructor(
    private router: Router,
    private quizService: QuizService,
    private dialog: MatDialog,
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.quizService.getQuizData().subscribe(data => {
      this.quizData = data;
      this.initializeForm();
      this.startTimer();
    });
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  initializeForm(): void {
    const controls: any = {};
    this.quizData.questions.forEach((question: any) => {
      if (question.answerType === 'radio' || question.answerType === 'dropdown') {
        controls[question.id] = ['', Validators.required];
      } else if (question.answerType === 'checkbox') {
        controls[question.id] = this.fb.group(
          question.options.reduce((acc: any, option: string) => {
            acc[option] = [false];
            return acc;
          }, {})
        );
      }
    });
    this.questionForm = this.fb.group(controls);
  }

  startTimer(): void {
    this.timeRemaining = this.sessionDuration;
    this.timerSubscription = interval(1000).subscribe(() => {
      this.timeRemaining--;
      if (this.timeRemaining <= 0) {
        this.timerSubscription.unsubscribe();
        this.endSession();
      }
    });
  }

  submitQuiz(): void {
    this.timerSubscription.unsubscribe();
    this.endSession();
  }

  endSession(): void {
    this.marks = this.calculateMarks();
    this.authService.removeCurrentUser();
    this.dialog.open(MarksDialogComponent, {
      width: '400px',
      data: { marks: this.marks }
    }).afterClosed().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  calculateMarks(): number {
    let marks = 0;
    this.quizData.questions.forEach((question: any) => {
      if (question.answerType === 'checkbox') {
        const correctOptions = question.correctAnswer;
        const selectedOptions = this.questionForm.value[question.id];
        const allCorrect = correctOptions.every((option: string) => selectedOptions[option]);
        const noneIncorrect = Object.keys(selectedOptions).every((option: string) =>
          selectedOptions[option] ? correctOptions.includes(option) : true
        );
        if (allCorrect && noneIncorrect) {
          marks++;
        }
      } else if (this.questionForm.value[question.id] === question.correctAnswer) {
        marks++;
      }
    });
    return marks;
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  onSubmit(): void {
    console.log(this.questionForm.value);
  }
}
