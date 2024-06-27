import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) { }
  ngOnInit(): void {
    console.log('home working');

  }
  start() {
    console.log('working quiz');

    this.router.navigate(['/quiz']);
  }
}
