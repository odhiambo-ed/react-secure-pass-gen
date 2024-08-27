import { FaClipboard } from "react-icons/fa";
import './Password.css'
import { useState } from "react";
import {upperCaseChars,lowerCaseChars, numberChars, symbolChars } from './CharSet'

export default function Password() {
  const [passLength, setPassLength] = useState(6)
  const [password, setPassword] = useState("")
  const [upperCase, setUpperCase] = useState(false)
  const [lowerCase, setLowerCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePassword = () => {
    let charSet = "";
    if (upperCase) charSet += upperCaseChars;
    if (lowerCase) charSet += lowerCaseChars;
    if (numbers) charSet += numberChars;
    if (symbols) charSet += symbolChars;
    
    let generatedPassword = "";
    for (let i = 0; i < passLength; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length)
      generatedPassword += charSet[randomIndex]
    }

    setPassword(generatedPassword);

  }

  return (
      <div className="pass__container mx-auto d-flex flex-column gap-3 justify-content-center align-items-center">
        <h3>Password Generator</h3>
        <div className="pass__field">
        <span className="pass__holder">{ password }</span>
          <button id="clipboad" className="btn__display">
            <FaClipboard />
          </button>
        </div>
        <div className="settings">
          <div className="setting-range mb-3">
            <label htmlFor="">Password Length</label>
            <div className="range__value d-flex gap-3 align-items-center">
              <input
                type="range"
                className="form-range custom__range"
                min="6"
                max="24"
                step="6"
                value={passLength}
                onChange={(e) => setPassLength(e.target.value)}
              />
              <span className="pass__value">{ passLength}</span>
            </div>
          </div>
          <div className="setting form-check form-switch">
            <label className="form-check-label" htmlFor="">
              Include Uppercase Letters
            </label>
            <input className="form-check-input" type="checkbox" checked={upperCase} onChange={() => setUpperCase(!upperCase)} />
          </div>
          <div className="setting form-check form-switch">
            <label className="form-check-label" htmlFor="">
              Include Lowercase Letters
            </label>
            <input className="form-check-input" type="checkbox" checked={lowerCase} onChange={() => setLowerCase(!lowerCase)}  />
          </div>
          <div className="setting form-check form-switch">
            <label className="form-check-label" htmlFor="">
              Include Numbers
            </label>
            <input className="form-check-input" type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} />
          </div>
          <div className="setting form-check form-switch">
            <label className="form-check-label" htmlFor="">
              Include Symbols
            </label>
            <input className="form-check-input" type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} />
          </div>
        </div>
        <div className="btn__gen" onClick={() => generatePassword}>Generate Password</div>
      </div>
  );
}
