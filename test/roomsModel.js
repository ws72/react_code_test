import { expect } from 'chai';
import rooms from '../src/models/roomsModel';

describe('rooms', function() {

    let roomInfo;
    beforeEach(function() {
        roomInfo = new rooms(24);
    });
    
    it('should return rooms', function() {
        
        expect(roomInfo.getRoomData(0,0)).to.equal(roomInfo.roomList[0][0]);
    });
});