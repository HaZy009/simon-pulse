import '../styles/scoreBoard.css';

import starTopLeft from '../assets/images/starTopLeftDark.svg';
import starsBottomRight from '../assets/images/starsBottomRightDark.svg';

function ScoreBoard({ currentScore, bestScore, newBestScore }) {
  return (
    <aside className="score-board">
      {newBestScore && (
        <>
          <img
            className="score-star-top-left"
            src={starTopLeft}
            alt=""
          />

          <img
            className="score-stars-bottom-right"
            src={starsBottomRight}
            alt=""
          />
        </>
      )}

      <div className="score-card">
        <p>Current Score : {currentScore}</p>
      </div>

      <div className="score-card best-score-card">
        <p>Best Score : {bestScore}</p>
      </div>
    </aside>
  );
}

export default ScoreBoard;