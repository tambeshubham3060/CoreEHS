import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';

// import { LoginComponent } from './login/login.component';
// import { RegistrationComponent } from './registration/registration.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent }
];

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ],
  // bootstrap: [LoginComponent]
})
export class AuthModule { }
