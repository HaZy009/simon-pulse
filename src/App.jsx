import './App.css';

import Header from './components/Header';
import SimonBoard from './components/SimonBoard';
import ScoreBoard from './components/ScoreBoard';
import SettingsMenu from './components/SettingsMenu';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="game-layout">
        <SettingsMenu />
        <SimonBoard />
        <ScoreBoard />
      </main>
    </div>
  );
}

export default App;