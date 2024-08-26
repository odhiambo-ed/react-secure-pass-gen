import { FaClipboard } from "react-icons/fa";

export default function Password() {
  return (
    <div className="container">
      <h3>Password Generator</h3>
          <div className="pass__container">
              <span></span>
        <button id="clipboad" className="btn__display">
          <FaClipboard />
        </button>
          </div>
          <div className="settings">
              <div className="setting">
                  <label htmlFor="">Password Length</label>
                  <input type="range" className="form-range" min="6" max="24" step="6" />
              </div>
              <div className="setting">
                  <label htmlFor="">Include Uppercase Letters</label>
                  <input type="checkbox" />
              </div>
              <div className="setting">
                  <label htmlFor="">Include Lowercase Letters</label>
                  <input type="checkbox" />
              </div>
              <div className="setting">
                  <label htmlFor="">Include Numbers</label>
                  <input type="checkbox" />
              </div>
              <div className="setting">
                  <label htmlFor="">Include Symbols</label>
                  <input type="checkbox" />
              </div>
          </div>
    </div>
  );
}
