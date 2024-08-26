import { FaClipboard } from "react-icons/fa";
import './Password.css'

export default function Password() {
  return (
    <div className="pass__background card d-flex flex-column">
      <div className="pass__container">
        <h3>Password Generator</h3>
        <div className="pass__field">
          <span></span>
          <button id="clipboad" className="btn__display">
            <FaClipboard />
          </button>
        </div>
        <div className="settings">
          <div className="setting-range">
            <label htmlFor="">Password Length</label>
            <div className="range__value">
              <input
                type="range"
                className="form-range custom__range"
                min="6"
                max="24"
                step="6"
                
              />
              <span></span>
            </div>
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
