# Hangman
Displays a game of hangman with a variety of words inputted by the student
Hangman Game

Description

This is a simple Hangman game built using React with class-based components. Players guess letters to complete a randomly chosen word before running out of lives.

Features

Random word selection from a predefined list.

Tracks guessed letters and remaining lives.

Displays the Hangman image based on incorrect guesses.

Provides a restart button to play a new game.

Installation & Setup

Follow these steps to run the Hangman game locally:

Prerequisites

Ensure you have Node.js and npm installed on your system.

Steps

Clone the repository:

git clone <repository_url>
cd hangman_project/hangman

Install dependencies:

npm install

Start the development server:

npm start

Open http://localhost:3000 in your browser to play the game.

How to Play

Click inside the input box and enter a letter.

Click the Search button to guess.

Correct guesses reveal letters, while incorrect guesses reduce lives.

The game ends when:

You correctly guess all letters (You win! ).

You run out of lives (Game Over! ).

Click New Game to restart.

Extra Features (Bonus)

Tracks previously guessed letters.

Displays remaining lives.

Uses images for the Hangman stages.

Project Structure

/hangman
│── /public            # Static assets (images, favicon)
│── /src               # React components
│   │── HangmanGame.js  # Main game logic
│   │── LetterBox.js    # Displays guessed letters
│   │── SingleLetterSearchBar.js # Input field for guessing letters
│── package.json       # Project dependencies
│── README.md          # Instructions

Technologies Used

React (Class-based Components)

JavaScript (ES6+)

HTML & CSS

Author

Created by Brenden Archer as part of a React class project.
