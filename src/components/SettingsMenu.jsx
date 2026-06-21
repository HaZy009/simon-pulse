import '../styles/settingsMenu.css';

import settingsIcon from '../assets/images/settingsDark.svg';

function SettingsMenu() {
  return (
    <aside className="settings-wrapper">
      <div className="settings-panel">
        <div className="setting-card">
          <label htmlFor="difficulty">Difficulty</label>

          <select id="difficulty" defaultValue="advanced">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="setting-card">
          <span>Sound</span>

          <button className="sound-toggle" type="button">
            OFF
          </button>
        </div>
      </div>

      <button className="settings-button" type="button">
        <img src={settingsIcon} alt="Settings" />
      </button>
    </aside>
  );
}

export default SettingsMenu;