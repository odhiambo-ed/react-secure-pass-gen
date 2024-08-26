import { FaClipboard } from "react-icons/fa";
import './Password.css'
import { useState } from "react";

export default function Password() {
  const [passLength, setPassLength] = useState(6)
  return (
      <div className="pass__container mx-auto d-flex flex-column gap-3 justify-content-center align-items-center">
        <h3>Password Generator</h3>
        <div className="pass__field">
          <span></span>
          <button id="clipboad" className="btn__display">
            <FaClipboard />
          </button>
        </div>
        <div className="settings">
          <div className="setting-range mb-3">
            <label htmlFor="">Password Length</label>
            <div className="range__value d-flex gap-5">
              <input
                type="range"
                className="form-range custom__range"
                min="6"
                max="24"
                step="6"
                value={passLength}
                onChange={(e) => setPassLength(e.target.value)}
              />
              <span>{ passLength}</span>
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
  );
}
