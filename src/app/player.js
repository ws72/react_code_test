import direction from './direction';

export default class player {
    constructor(x, y) {
        this.posX = x;
        this.posY = y;
    }

    posX=0;
    posY=0;

    live = 5;
    gold = 0;

    getPosX=()=> this.posX;

    getPosY=()=> this.posY;
    
    move=(direct)=>{
        switch (direct){
            case direction.EAST:
                this.posX++;
                break;
            case direction.WEST:
                this.posX--;
                break;
            case direction.NORTH:
                this.posY++;
                break;
            case direction.SOUTH:
                this.posY--;    
                break;
            default:
                break;
        }
    }
};