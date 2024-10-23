## Problem Statement

Create a Quiz application.

Core Functionality:

-   API Integration

-   Make API request to get the questions [endpoint](https://quizapi.io/api/v1/questions?apiKey=M7RT7dicTsTgRWHPM4LqiwuNuiHK9VmtPIuFZOnY&category=code&difficulty=Easy&limit=10&tags=JavaScript)

-   Question Presentation:

-   Each page will display a single question with its corresponding options.

-   Progress Tracking:

-   A progress bar will be displayed at the top of each page to indicate the user's progress through the quiz.

-   The progress bar's width will increase as the user completes each question.

-   Answer Selection:

-   Users can select one or more options as their answer(s).

-   The selected options will be highlighted or checked to indicate the user's choice.

-   Scoring:

-   The application will calculate the user's score based on the number of correct answers.

-   The final score will be displayed to the user upon quiz completion.

-   Switching

-   Can go back or go front to questions and change already selected answers

-   Once submitted, you can't edit the answer

-   Optional

-   When the user refreshes the page in the middle of answering questions can go to where he left off (use local storage)

-   Show the result in chat/graph.

Tips: you can use the Antdesign Form to handle all form-related parts. 

Expectation:

-   Code that's clean, reusable, and not bloated with unnecessary stuff

-   Make the logic  simple and easy to understand

-   Proper Code Type handling using typescript

Technical Implementation:

-   React.js: The primary framework for building the user interface and managing the application's state.

-   Vite: A build tool for fast development and server-side rendering.

-   Ant Design: A component library providing pre-built UI elements like buttons, progress bars, and input fields.

-   React Context / Redux: A mechanism for sharing data between components without prop drilling. It will be used to manage the quiz's state, including the current question, selected answers, and score.

-   Tailwind CSS: A utility-first CSS framework for styling the application's components.

Development Timeline (3 days):

## Task Instructions

1. **Fork** the repository.
2. Work on the **interview task** in your forked repository.
3. After completing the task, raise a **Pull Request (PR)** to the project's **main branch**.

If you face any issues, feel free to contact us at:  
**Email:** ajayaj7397@gmail.com