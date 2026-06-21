import '../styles/scoreBoard.css';

function ScoreBoard() {
  return (
    <aside className="score-board">
      <div className="score-card">
        <p>Current Score : 0</p>
      </div>

      <div className="score-card best-score-card">
        <p>Best Score : 0</p>
      </div>
    </aside>
  );
}

export default ScoreBoard;