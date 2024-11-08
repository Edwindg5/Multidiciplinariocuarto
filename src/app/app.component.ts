import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/components/home/home.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multi';

}
