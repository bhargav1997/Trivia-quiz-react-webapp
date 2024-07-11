# Trivia Quiz Application

This is a simple trivia quiz application built using React. Users can select different categories, difficulties, and question types (multiple choice or true/false). The application fetches questions from the Open Trivia Database API and provides feedback on the user's answers.

## Features

- Dynamic category selection
- Selectable difficulty levels
- Multiple choice and true/false question types
- Real-time answer validation with feedback
- Clean and user-friendly interface

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/trivia-quiz-app.git
```

2. Navigate to the project directory:

```bash
cd trivia-quiz-app
```

3. Install the dependencies:

```bash
npm install
```

### Running the Application

To start the application, run:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Code Structure

- `src/Quiz.js`: The main React component that handles the quiz logic and rendering.
- `src/Quiz.css`: The CSS file for styling the quiz application.

## API Usage

This application uses the [Open Trivia Database API](https://opentdb.com/api_config.php) to fetch trivia questions.

### Fetching Categories

The categories are fetched from:

```
https://opentdb.com/api_category.php
```

### Fetching Questions

Questions are fetched based on the selected category, difficulty, and type:

```
https://opentdb.com/api.php?amount=10&category={category}&difficulty={difficulty}&type={type}
```

## Customization

You can customize the application by modifying the `src/Quiz.js` and `src/Quiz.css` files.

### Adding New Features

To add new features, such as more question types or additional feedback options, you can extend the logic in the `Quiz.js` file and update the CSS as needed.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your changes. We appreciate your contributions!

## Acknowledgements

- [Open Trivia Database](https://opentdb.com/) for providing the trivia questions API.

