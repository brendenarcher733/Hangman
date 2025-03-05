import React from 'react';
import LetterBox from './LetterBox';
import SingleLetterSearchbar from './SingleLetterSearchBar';
import './App.css';

const pics = ['noose.png', 'upperBody.png', 'upperandlower.png', '1arm.png', 'botharms.png'];
const words = ["Morehouse", "Spelman", "Basketball", "Table", "Museum", "Excellent", "Fun", "React","Car","Expiditously"];

class HangmanGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordList: words,
      curWord: Math.floor(Math.random() * words.length),
      lifeLeft: 5,
      usedLetters: [],
      gameOver: false,
      won: false,
    };
  }

  handleLetterGuess = (letter) => {
    if (this.state.usedLetters.includes(letter) || this.state.gameOver) return;

    this.setState((prevState) => {
      const word = prevState.wordList[prevState.curWord].toLowerCase();
      const isCorrect = word.includes(letter.toLowerCase());
      const newUsedLetters = [...prevState.usedLetters, letter];
      const newLifeLeft = isCorrect ? prevState.lifeLeft : prevState.lifeLeft - 1;
      const allLettersGuessed = word.split('').every((l) => newUsedLetters.includes(l));

      return {
        usedLetters: newUsedLetters,
        lifeLeft: newLifeLeft,
        gameOver: newLifeLeft === 0 || allLettersGuessed,
        won: allLettersGuessed,
      };
    });
  };

  startNewGame = () => {
    this.setState({
      curWord: Math.floor(Math.random() * this.state.wordList.length),
      lifeLeft: 5,
      usedLetters: [],
      gameOver: false,
      won: false,
    });
  };

  render() {
    const word = this.state.wordList[this.state.curWord].toLowerCase();

    return (
      <div className="hangman-game">
        <h1>Hangman Game</h1>
        <img src={process.env.PUBLIC_URL + "/" + pics[Math.min(this.state.lifeLeft, pics.length - 1)]} alt="Hangman" />

        <div className="word-display">
          {word.split('').map((letter, index) => (
            <LetterBox key={index} letter={letter} isVisible={this.state.usedLetters.includes(letter)} />
          ))}
        </div>
        <SingleLetterSearchbar onSearch={this.handleLetterGuess} />
        <p>Used Letters: {this.state.usedLetters.join(', ')}</p>
        <p>Lives Left: {this.state.lifeLeft}</p>
        {this.state.gameOver && (
          <h2>{this.state.won ? 'You Won!' : 'Game Over! The word was: ' + word}</h2>
        )}
        <button onClick={this.startNewGame}>New Game</button>
      </div>
    );
  }
}

export default HangmanGame;
