import '../styles/simonBoard.css';

function SimonBoard({
  currentScore,
  activeColor,
  onButtonClick,
  onNewGame,
}) {
  return (
    <section className="simon-container">
      <div className="simon-circle">
        <button
          className={`simon-button top-left ${activeColor === 'top-left' ? 'active' : ''}`}
          type="button"
          onClick={() => onButtonClick('top-left')}
        ></button>

        <button
          className={`simon-button top-right ${activeColor === 'top-right' ? 'active' : ''}`}
          type="button"
          onClick={() => onButtonClick('top-right')}
        ></button>

        <button
          className={`simon-button bottom-left ${activeColor === 'bottom-left' ? 'active' : ''}`}
          type="button"
          onClick={() => onButtonClick('bottom-left')}
        ></button>

        <button
          className={`simon-button bottom-right ${activeColor === 'bottom-right' ? 'active' : ''}`}
          type="button"
          onClick={() => onButtonClick('bottom-right')}
        ></button>

        <div className="center-score">{currentScore}</div>
      </div>

      <button className="new-game-btn" type="button" onClick={onNewGame}>
        New Game
      </button>
    </section>
  );
}

export default SimonBoard;