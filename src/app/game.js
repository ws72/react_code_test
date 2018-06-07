import player from './player';
import axios from 'axios';

export default class game{ 
    constructor() {
        this.currentPlayer = new player(0,0);
    }

    currentPlayer;

    status;

    report=()=>console.log('Got gold: '+this.currentPlayer.gold);
    

    updateState=(isMonster)=>{
        this.status = isMonster;
        if(isMonster==='MONSTER'){
            this.currentPlayer.live--;
        }else{
            this.currentPlayer.gold++;
        }
        
        if(this.currentPlayer.live<=0){
            console.log('Game over');
            this.report();
            this.reset();
        }
    }

    reset = ()=>{
        console.log('Game restart');
        this.currentPlayer = new player(0,0);
    }

    gotoRoom = (posx, posy) => {

        this.verifyPosition(posx, posy);
        console.log(posx);
        console.log(posy);
        const url = 'http://localhost:3003/rooms/'+posx+'/'+posy;
        
        return new Promise(function(resolve, reject) {
            axios.get(url)
              .then(response => {
                resolve(response.data);
              })
              .catch(error => {
                reject(error);
              });
            });
    }

    execute =(direction)=>{
        this.currentPlayer.move(direction);
        this.gotoRoom(this.currentPlayer.posX, this.currentPlayer.posY)
        .then((result) =>{
            console.log('You got a ' + result);
            this.updateState(result);
            return Promise.resolve('Success');
        })
        .catch((err) =>{
            console.log(err);
            return Promise.reject(err);
        })
    }
    
    verifyPosition = (posx, posy) => posx>=0 && posx>=0 && posy<=24 &&posy<=24;
    
}