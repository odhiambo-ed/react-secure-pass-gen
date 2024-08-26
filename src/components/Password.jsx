import { FaClipboard } from "react-icons/fa";

export default function Password() {
  return (
    <div className="pass__background">
      <div className="pass__container">
        <h3>Password Generator</h3>
        <div className="pass__field">
          <span></span>
          <button id="clipboad" className="btn__display">
            <FaClipboard />
          </button>
        </div>
        <div className="settings">
          <div className="setting">
            <label htmlFor="">Password Length</label>
            <input
              type="range"
              className="form-range"
              min="6"
              max="24"
              step="6"
            />
          </div>
          <div className="setting form-check form-switch">
            <label className="form-check-label" htmlFor="">
              Include Uppercase Letters
            </label>
            <input className="form-check-input" type="checkbox" />
          </div>
          <div className="setting form-check form-switch">
            <label className="form-check-label" htmlFor="">
              Include Lowercase Letters
            </label>
            <input className="form-check-input" type="checkbox" />
          </div>
          <div className="setting form-check form-switch">
            <label className="form-check-label" htmlFor="">
              Include Numbers
            </label>
            <input className="form-check-input" type="checkbox" />
          </div>
          <div className="setting form-check form-switch">
            <label className="form-check-label" htmlFor="">
              Include Symbols
            </label>
            <input className="form-check-input" type="checkbox" />
          </div>
        </div>
        <div className="btn">Generate Password</div>
      </div>
    </div>
  );
}
