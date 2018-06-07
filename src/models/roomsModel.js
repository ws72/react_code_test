import {generatedRooms} from '../util/generateRooms'

export default class rooms {

    roomList;

    constructor(n) {
        this.roomList = generatedRooms(n);
    }

    getRoomData=(i,j)=>this.roomList[i][j];
}