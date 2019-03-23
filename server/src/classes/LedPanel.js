
import { five } from 'johnny-five';

class LedPanel{
  constructor(noOfLeds){
    this.noOfLeds = noOfLeds;
    this.ledPanel = [];
    LedPanel.onLeds = [];

    for(let i=0; i< noOfLeds; i++){
      LedPanel.onLeds.push(false);
    }
  }

  addToLedPanel(led){
    this.ledPanel.push(led);
  }

  turnAllLeds(){
    for(let i=0; i<this.noOfLeds; i++){
      LedPanel.onLeds.push(true);
    }
  }

  turnOnLed(index){
    this.onLeds[index] = true;
  }
}

export default LedPanel;