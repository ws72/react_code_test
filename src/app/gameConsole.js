import game from './game';

export default class gameConsole{
    
    curgame;

    constructor() {
        this.curgame = new game();
    }
    
    placeCommand = (command) =>{
        this.curgame.execute(command.toString());
    }    
}