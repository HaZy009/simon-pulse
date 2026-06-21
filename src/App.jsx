import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SimonBoard from "./components/SimonBoard";
import ScoreBoard from "./components/ScoreBoard";
import SettingsMenu from "./components/SettingsMenu";
import { useSimonGame } from "./hooks/useSimonGame";

function App() {
  const [difficulty, setDifficulty] = useState("intermediate");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);

  const [bestScore, setBestScore] = useState(() => {
    const savedScore = localStorage.getItem("bestScore");
    return savedScore ? Number(savedScore) : 0;
  });

  useEffect(() => {
    localStorage.setItem("bestScore", bestScore);
  }, [bestScore]);

  const {
    activeColor,
    newBestScore,
    gameStarted,
    startNewGame,
    handleButtonClick,
  } = useSimonGame({
    difficulty,
    soundEnabled,
    currentScore,
    setCurrentScore,
    bestScore,
    setBestScore,
  });

  return (
    <div className="app">
      <Header />

      <main className="game-layout">
        <SettingsMenu
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          isDisabled={gameStarted}
        />

        <SimonBoard
          currentScore={currentScore}
          activeColor={activeColor}
          onButtonClick={handleButtonClick}
          onNewGame={startNewGame}
        />

        <ScoreBoard
          currentScore={currentScore}
          bestScore={bestScore}
          newBestScore={newBestScore}
        />
      </main>
    </div>
  );
}

export default App;