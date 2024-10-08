import { FaClipboard } from "react-icons/fa";
import "./Password.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  upperCaseChars,
  lowerCaseChars,
  numberChars,
  symbolChars,
} from "./CharSet";

export default function Password() {
  const [passLength, setPassLength] = useState(6);
  const [password, setPassword] = useState("");
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const evaluatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) return { label: "Weak", percentage: 33 };
    if (strength === 3) return { label: "Medium", percentage: 66 };
    if (strength >= 4) return { label: "Strong", percentage: 100 };

    return { label: "Very Weak", percentage: 0 };
  };

  const generatePassword = () => {
    let charSet = "";
    if (upperCase) charSet += upperCaseChars;
    if (lowerCase) charSet += lowerCaseChars;
    if (numbers) charSet += numberChars;
    if (symbols) charSet += symbolChars;

    let generatedPassword = "";
    for (let i = 0; i < passLength; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }

    if ([upperCase, lowerCase, numbers, symbols].filter(Boolean).length < 2) {
      toast.warn("Please select at least two character types!");
      return;
    }

    setPassword(generatedPassword);
    const strength = evaluatePasswordStrength(generatedPassword);
    setPasswordStrength(strength);
  };

  const copyClipBoard = () => {
    navigator.clipboard.writeText(password);
    toast.info("Password copied to clipboard!");
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="pass__container mx-auto d-flex flex-column gap-3 justify-content-center align-items-center">
        <h3>Password Generator</h3>
        <div className="pass__field">
          <span className="pass__holder">{password}</span>
          <button
            id="clipboard"
            className="btn__display"
            onClick={copyClipBoard}
          >
            <FaClipboard />
          </button>
        </div>
        {password && (
          <div className="password-strength-container w-100">
            <label>Password Strength: {passwordStrength.label}</label>
            <div className="progress">
              <div
                className={`progress-bar ${passwordStrength.label.toLowerCase()}`}
                role="progressbar"
                style={{ width: `${passwordStrength.percentage}%` }}
                aria-valuenow={passwordStrength.percentage}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {passwordStrength.label}
              </div>
            </div>
          </div>
        )}
        <div className="settings">
          <div className="setting-range mb-3">
            <label>Password Length</label>
            <div className="range__value d-flex gap-3 align-items-center">
              <input
                type="range"
                className="form-range custom__range"
                min="6"
                max="24"
                step="1"
                value={passLength}
                onChange={(e) => setPassLength(Number(e.target.value))}
              />
              <span className="pass__value">{passLength}</span>
            </div>
          </div>
          <div className="setting form-check form-switch">
            <label className="form-check-label">
              Include Uppercase Letters
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              checked={upperCase}
              onChange={() => setUpperCase(!upperCase)}
            />
          </div>
          <div className="setting form-check form-switch">
            <label className="form-check-label">
              Include Lowercase Letters
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              checked={lowerCase}
              onChange={() => setLowerCase(!lowerCase)}
            />
          </div>
          <div className="setting form-check form-switch">
            <label className="form-check-label">Include Numbers</label>
            <input
              className="form-check-input"
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
            />
          </div>
          <div className="setting form-check form-switch">
            <label className="form-check-label">Include Symbols</label>
            <input
              className="form-check-input"
              type="checkbox"
              checked={symbols}
              onChange={() => setSymbols(!symbols)}
            />
          </div>
        </div>
        <div className="btn__gen" onClick={generatePassword}>
          Generate Password
        </div>
      </div>
    </>
  );
}