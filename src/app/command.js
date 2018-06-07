export default class command {

    direction='';

    constructor(direction) {
        this.direction = direction;
    }

    toString=()=> this.direction;
}