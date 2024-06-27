import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    console.log('resgister comp working');

  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const { username, password, confirmPassword } = this.registrationForm.value;
      if (password === confirmPassword) {
        this.authService.register(username, password).subscribe(success => {
          if (success) {
            this.authService.registeredUsers.push({ username: username, password: password });
            this.successMessage = 'Registration successful! Redirecting to login...';
            setTimeout(() => this.router.navigate(['/login']), 2000);
          } else {
            this.errorMessage = 'Registration failed. Please try again.';
          }
        });
      } else {
        this.errorMessage = 'Passwords do not match.';
      }
    }
  }
}
