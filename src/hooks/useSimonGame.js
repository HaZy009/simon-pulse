import { useState } from "react";
import topLeftSound from "../assets/sounds/topLeft.wav";
import topRightSound from "../assets/sounds/topRight.wav";
import bottomLeftSound from "../assets/sounds/bottomLeft.wav";
import bottomRightSound from "../assets/sounds/bottomRight.wav";
import gameOverSound from "../assets/sounds/gameOver.wav";

const COLORS = ["top-left", "top-right", "bottom-left", "bottom-right"];

const DIFFICULTY_CONFIG = {
  easy: {
    speed: 900,
  },
  intermediate: {
    speed: 650,
  },
  advanced: {
    speed: 400,
  },
};

const SOUND_MAP = {
  "top-left": topLeftSound,
  "top-right": topRightSound,
  "bottom-left": bottomLeftSound,
  "bottom-right": bottomRightSound,
  gameOver: gameOverSound,
};

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function generateSequence(length) {
  return Array.from({ length }, () => getRandomColor());
}

export function useSimonGame({
  difficulty,
  soundEnabled,
  currentScore,
  setCurrentScore,
  bestScore,
  setBestScore,
}) {
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [activeColor, setActiveColor] = useState(null);
  const [isPlayingSequence, setIsPlayingSequence] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [newBestScore, setNewBestScore] = useState(false);

  function playSound(soundName) {
    if (!soundEnabled) return;

    const audio = new Audio(SOUND_MAP[soundName]);
    audio.currentTime = 0;
    audio.play();
  }

  function playSequence(sequenceToPlay) {
    setIsPlayingSequence(true);
    setUserSequence([]);

    const speed = DIFFICULTY_CONFIG[difficulty].speed;

    sequenceToPlay.forEach((color, index) => {
      setTimeout(() => {
        setActiveColor(color);
        playSound(color);

        setTimeout(() => {
          setActiveColor(null);

          if (index === sequenceToPlay.length - 1) {
            setIsPlayingSequence(false);
          }
        }, speed / 2);
      }, index * speed);
    });
  }

  function startNewGame() {
    const newSequence = generateSequence(1);

    setSequence(newSequence);
    setUserSequence([]);
    setCurrentScore(0);
    setGameStarted(true);
    setNewBestScore(false);

    setTimeout(() => {
      playSequence(newSequence);
    }, 500);
  }

  function handleButtonClick(color) {
    if (!gameStarted || isPlayingSequence) return;

    setActiveColor(color);
    playSound(color);

    setTimeout(() => {
      setActiveColor(null);
    }, 200);

    const newUserSequence = [...userSequence, color];
    setUserSequence(newUserSequence);

    const currentIndex = newUserSequence.length - 1;

    if (newUserSequence[currentIndex] !== sequence[currentIndex]) {
      endGame();
      return;
    }

    if (newUserSequence.length === sequence.length) {
      const updatedScore = currentScore + 1;
      setCurrentScore(updatedScore);

      const nextSequence = [...sequence, getRandomColor()];
      setSequence(nextSequence);
      setUserSequence([]);

      setTimeout(() => {
        playSequence(nextSequence);
      }, 800);
    }
  }

  function endGame() {
    setGameStarted(false);
    setIsPlayingSequence(false);
    setUserSequence([]);
    playSound("gameOver");

    if (currentScore > bestScore) {
      setBestScore(currentScore);
      setNewBestScore(true);
    } else {
      setNewBestScore(false);
    }
  }

  return {
    activeColor,
    isPlayingSequence,
    gameStarted,
    newBestScore,
    startNewGame,
    handleButtonClick,
  };
}
