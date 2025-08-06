# Gamified Leaderboard for Speech Assessment Research

This project is an Angular application developed as a technical task for a Master's thesis application. The goal is to explore how peripheral gamification can impact user adherence and experience in repeated speech assessments.

The application implements a interactive, visually engaging leaderboard that tracks participant scores, incorporating several gamification elements to make the experience more rewarding.

---

## Core Functionality

This application meets all the main requirements of the technical task:

* **Participant Entry**: Users can enter a participant's name or ID into an input field.
* **Random Score Generation**: A "Add Random Score" button allows for the quick addition of a new participant with a randomly generated score between 0 and 1,000. This simulates score updates from a completed speech task.
* **Correct Sorting**: The leaderboard is automatically sorted in **descending order** after each new entry, ensuring the participant with the highest score is always at the top.

---

## Gamification & UI Enhancements

To directly address the research question, several peripheral gamification features were implemented to enhance the user experience:

* **User Interface**: The interface is designed with a dark, modern "dashboard" theme to create a professional and engaging feel.
* **Highlight Top Performer**: The row for the #1 ranked participant is visually highlighted with a gradient background and a colored border, making their achievement immediately clear.
* **Visual Progress Bars**: Each participant's score is represented not just by a number, but also by a visual progress bar. This makes the score feel more tangible and provides a quick visual reference of performance.
* **Research Context Tooltip**: A small info icon (`ⓘ`) is included in the header. Hovering over this guides user to interact with the leaderboard by adding score manually or generate them.

## Extra Features Implemented

Beyond the initial scope, the following functionality was added to increase the application's utility for a research context:

* **Manual Score Entry**:
    * A second button, "Add Manual Score," was added to the main interface.
    * Clicking this button opens a **popup modal** that allows the user to enter both a participant's name and a specific, manual score.
    * This feature is important for scenarios where a precise score from an assessment needs to be added, rather than a random one.
    * The modal includes validation to ensure that both a name and a valid, non-negative score are entered before submission.
    * A dedicated "Unlocked Achievements" card is displayed to showcase the *potential* for a badge system. It includes mockups for achievements like "Pace Setter" and "Consistent Speaker," demonstrating how such a system would be integrated into the UI.

---

## How to Run the Project

1. # GamifiedLeaderboard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.4.

2.  **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) (which includes npm) and the [Angular CLI](https://angular.dev/cli) installed globally.
3.  **Clone the repository**:
    ```bash
    git clone <your-repository-url>
    ```
4.  **Navigate to the project directory**:
    ```bash
    cd Gamified-Leaderboard
    ```
5.  **Install dependencies**:
    ```bash
    npm install
    ```
6.  **Run the development server**:
    ```bash
    ng serve
    ```
7.  Open your browser and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
