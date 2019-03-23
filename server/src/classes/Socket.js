import { PERSONS_LIST, LIGHT_LAMP } from '../constants';
import { personList } from '../list';
import LedPanel from './LedPanel';

const io = require('socket.io')();

export default class Socket {
  static initServer(port){
    io.on("connection", (client) => {
      console.log("connection aquired");

      client.emit(PERSONS_LIST, personList);

      client.on(LIGHT_LAMP, (person) => {
        console.log(LIGHT_LAMP)
        if(person){
          for(let i=0; i<person.bulbs.length; i++){
            LedPanel.onLeds[person.bulbs[i]] = true;
          }
        }
      })
    })

    io.listen(port);
  }
}