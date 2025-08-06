import { Component } from '@angular/core'; // Importing necessary Angular core module
import { CommonModule } from '@angular/common'; // Importing CommonModule for common directives like ngIf, ngFor
import { FormsModule } from '@angular/forms'; // Importing FormsModule for two-way data binding with ngModel

// Defining the User interface to represent each participant in the leaderboard
export interface User {
  name: string;
  score: number;
}
// Component decorator to define metadata for the Leaderboard component
@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leaderboard.html',
  styleUrl: './leaderboard.css'
})
//
export class LeaderboardComponent {
  newUserName: string = '';
  leaderboard: User[] = [];

  /**
   * Controls the visibility of the manual score modal.
   * Bound to *ngIf in the template.
   */
  isModalVisible: boolean = false;

  /**
   * Holds the score value from the modal's number input.
   * Initialized to null.
   */
  manualScore: number | null = null;

  constructor() { }

  /**
   * Adds a user with a randomly generated score.
   * This is called by the first button in the input section.
   */
  addUser() {
    if (this.newUserName.trim() === '') { return; }
    const newUser: User = {
      name: this.newUserName.trim(),
      score: Math.floor(Math.random() * 1001)
    };
    this.leaderboard.push(newUser);
    this.leaderboard.sort((a, b) => b.score - a.score);
    this.newUserName = ''; // Clear input after adding
  }

  // Opens the manual score entry modal by setting the visibility flag to true.
  openModal() {
    this.isModalVisible = true;
  }

  // Closes the modal and resets the input fields to their default state.
  closeModal() {
    this.isModalVisible = false;
    this.newUserName = '';
    this.manualScore = null;
  }

  // Submits a user with a manually entered score from the modal.

  submitManualScore() {
    // Validate that both a name and a valid score have been entered.
    if (this.newUserName.trim() === '' || this.manualScore === null || this.manualScore < 0) {
      alert('Please enter a valid participant name and score.'); // Alert if input is invalid
      return;
    }
// Create a new user object with the provided name and score
    const newUser: User = {
      name: this.newUserName.trim(),
      score: this.manualScore // Use the score entered in the modal
    };

    this.leaderboard.push(newUser); // Add the new user to the leaderboard
    this.leaderboard.sort((a, b) => b.score - a.score); //

    this.closeModal(); // Close and reset the modal after successful submission.
  }
}
