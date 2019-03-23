import ConsoleStylingClass from "./classes/Console";
import ArduinoBoard from "./classes/ArduinoBoard";
import Socket from "./classes/Socket";
import LedPanel from './classes/LedPanel';
var five = require("johnny-five");

class Main{
  static async main(){
    const unoBoard = new ArduinoBoard("COM4", 9600);
    const ledPanel = new LedPanel(14);
    try{
      let board = await unoBoard.connectBoard();
      Socket.initServer(8000);
      let leds = [];

      
      for(let i=0; i<14; i++){
        let led = new five.Led(i);
        ledPanel.addToLedPanel(led);
        console.log("Led added");
      }
      

      board.loop(500, () => {
        for(let i=0; i<ledPanel.noOfLeds; i++){
          if(LedPanel.onLeds[i] === true){
            ledPanel.ledPanel[i].on();
          }
        }
      })
    }catch(err){
      console.log(err);
    }
  }
}


ConsoleStylingClass.run();
Main.main();
// ConsoleStylingClass.finish();