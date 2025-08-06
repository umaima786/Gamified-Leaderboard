import { Component, signal } from '@angular/core'; 
import { LeaderboardComponent } from './leaderboard/leaderboard'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LeaderboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Now that 'signal' is imported, this line will work
  protected readonly title = signal('Gamified-Leaderboard');
}