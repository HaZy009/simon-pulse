import { useState } from "react";
import "../styles/settingsMenu.css";

import settingsIcon from "../assets/images/settingsDark.svg";

function SettingsMenu({
  difficulty,
  setDifficulty,
  soundEnabled,
  setSoundEnabled,
  isDisabled,
}) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);

  return (
    <aside className="settings-wrapper">
      {isSettingsOpen && (
        <div className="settings-panel">
          <div className="setting-card">
            <label htmlFor="difficulty">Difficulty</label>

            <select
              id="difficulty"
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value)}
              disabled={isDisabled}
            >
              <option value="easy">Easy</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="setting-card">
            <span>Sound</span>

            <button
              className="sound-toggle"
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              disabled={isDisabled}
            >
              {soundEnabled ? "ON" : "OFF"}
            </button>
          </div>
        </div>
      )}

      <button
        className="settings-button"
        type="button"
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
      >
        <img src={settingsIcon} alt="Settings" />
      </button>
    </aside>
  );
}

export default SettingsMenu;