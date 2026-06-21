import '../styles/simonBoard.css';

function SimonBoard() {
  return (
    <section className="simon-container">

      <div className="simon-circle">

        <div className="simon-button top-left"></div>

        <div className="simon-button top-right"></div>

        <div className="simon-button bottom-left"></div>

        <div className="simon-button bottom-right"></div>

        <div className="center-score">
          0
        </div>

      </div>

      <button className="new-game-btn">
        New Game
      </button>

    </section>
  );
}

export default SimonBoard;