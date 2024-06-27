import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  { path: '', component: QuizComponent }
];

@NgModule({
  declarations: [QuizComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ]
})
export class QuizModule { }
