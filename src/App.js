import React, { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("Press o Click to Start");

  document.addEventListener("keyup", function(e) {
    keyAction(e.key.toLocaleUpperCase());
  });

  function handleClick(e) {
    keyAction(e.target.children[0].id);
  }

  function keyAction(key) {
    if (key !== "") {
      if (
        key === "Q" ||
        key === "W" ||
        key === "E" ||
        key === "A" ||
        key === "S" ||
        key === "D" ||
        key === "Z" ||
        key === "X" ||
        key === "C"
      ) {
        let name = nameKey(key);
        setItem(name);
        let play = document.getElementById(key);
        play.currentTime = 0;
        play.play();
      }
    }
  }

  function nameKey(key) {
    switch (key) {
      case "Q":
        return "Chord 1";
      case "W":
        return "Chord 2";
      case "E":
        return "Chord 3";
      case "A":
        return "Heater 1";
      case "S":
        return "Heater 2";
      case "D":
        return "Heater 3";
      case "Z":
        return "Kick n' Hat";
      case "X":
        return "Side Stick";
      case "C":
        return "Cev H2";
    }
  }

  return (
    <div id="drum-machine" className="App">
      <div className="App-header">
        <h1>Drum Machine</h1>
        <div id="display">
          <div className="keyboard">
            <div className="drum-pad" id="audio1" onClick={handleClick}>
              <audio
                className="clip"
                id="Q"
                type="audio/mpeg"
                src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
              />
              Q
            </div>
            <div className="drum-pad" id="audio2" onClick={handleClick}>
              <audio
                className="clip"
                id="W"
                type="audio/mpeg"
                src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
              />
              W
            </div>
            <div className="drum-pad" id="audio3" onClick={handleClick}>
              <audio
                className="clip"
                id="E"
                type="audio/mpeg"
                src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
              />
              E
            </div>
            <div className="drum-pad" id="audio4" onClick={handleClick}>
              <audio
                className="clip"
                id="A"
                type="audio/mpeg"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              />
              A
            </div>
            <div className="drum-pad" id="audio5" onClick={handleClick}>
              <audio
                className="clip"
                id="S"
                type="audio/mpeg"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              />
              S
            </div>
            <div className="drum-pad" id="audio6" onClick={handleClick}>
              <audio
                className="clip"
                id="D"
                type="audio/mpeg"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              />
              D
            </div>
            <div className="drum-pad" id="audio7" onClick={handleClick}>
              <audio
                className="clip"
                id="Z"
                type="audio/mpeg"
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              />
              Z
            </div>
            <div className="drum-pad" id="audio8" onClick={handleClick}>
              <audio
                className="clip"
                id="X"
                type="audio/mpeg"
                src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
              />
              X
            </div>
            <div className="drum-pad" id="audio9" onClick={handleClick}>
              <audio
                className="clip"
                id="C"
                type="audio/mpeg"
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              />
              C
            </div>
          </div>

          <div>
            <p>{item}</p>
          </div>
        </div>
        <p>
          <a href="https://emiliort.com" target="_blank" rel="" className="me">
            By EmilioRT
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
