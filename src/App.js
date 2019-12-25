import React, {useState} from 'react';
import './App.css';

function App() {

  const [item, setItem] = useState('')
  const [play, setPlay] = useState('')

  function handleClick(e){
    let id = e.target.children
    id[0].autoplay = true
    console.log(id)
    setItem('Hola desde hook')
    setPlay('play')
  }

  return (
    <div id="drum-machine" className="App">
      <div  className="App-header">
        <div id="display">
          {item}
          <div className="keyboard">
            <div className="drum-pad" id="audio1" onClick={handleClick}>
            <audio className="clip" id="Q" controlsList={play} accessKey={"q"} >
              <source type="audio/mpeg" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" />
            </audio>
            Q
            </div>
            <div className="drum-pad" id="audio2">
            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" />
            W
            </div>
            <div className="drum-pad" id="audio3">
            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" />
            E
            </div>
            <div className="drum-pad" id="audio4">
            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" />
            A
            </div>
            <div className="drum-pad" id="audio5">
            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" />
            S
            </div>
            <div className="drum-pad" id="audio6">
            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" />
            D
            </div>
            <div className="drum-pad" id="audio7">
            <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" />
            Z
            </div>
            <div className="drum-pad" id="audio8">
            <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" />
            X
            </div>
            <div className="drum-pad" id="audio9">
            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" />
            C
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
