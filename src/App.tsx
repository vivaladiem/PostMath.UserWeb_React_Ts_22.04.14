import React, { createElement } from 'react';
import Button from './stories/Button/Button';

function App() {

  let buttons:React.ReactNode[] = [];
  let iconButtons:React.ReactNode[] = [];

  const size = ["", "small", "large"];
  const state = ["", "disabled", "negative"];
  const line = [false, true];
  const round = [false, true];
  const iconSrc = "/img/icon_clip.svg";
  const inline = [false, true];

    for (var a = 0; a < size.length; a++) {
      for (var d = 0; d < round.length; d++) {
        for (var c = 0; c < line.length; c++) {
          for (var b = 0; b < state.length; b++) {
            let label = 'button';
            if (a > 0) label += "_" + size[a];
            if (line[c]) {
              label += "_line";
            }
            if (round[d]) {
              label += "_round";
            }
            
            buttons.push(<Button 
              size={size[a]}
              state={state[b]}
              line={line[c]}
              round={round[d]}>
                {label}
              </Button>);
          }
        }
      }
    }

    for (var a = 0; a < size.length; a++) {
      for (var d = 0; d < round.length; d++) {
        for (var c = 0; c < line.length; c++) {
          for (var b = 0; b < state.length; b++) {
            let label = 'button';
            if (a > 0) label += "_" + size[a];
            if (line[c]) {
              label += "_line";
            }
            if (round[d]) {
              label += "_round";
            }
            
            iconButtons.push(<Button 
              size={size[a]}
              state={state[b]}
              line={line[c]}
              round={round[d]}
              iconSrc={iconSrc}
              >
                {label}
              </Button>);
          }
        }
      }
    }


  return (
    <div className="App">
      <div className="ButtonSampleContainer">
        {buttons}
        {iconButtons}
      </div>
    </div>
  );
}

export default App;
