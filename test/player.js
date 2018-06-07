import { expect } from 'chai';
import player from '../src/app/player';

describe('Player', function() {
  describe('move()', function() {

    let playerTest;
    beforeEach(function() {
        playerTest = new player(0,0);
    });
    
    it('should not move east', function() {
        playerTest.move('EAST');
        expect(playerTest.getPosX()).to.equal(0);
    });
    
    it('should move east', function() {
      playerTest.move('east');
      expect(playerTest.getPosX()).to.equal(1);
    });
  
    it('should move west', function() {
      playerTest.move('west');
      expect(playerTest.getPosX()).to.equal(-1);
    });

    it('should move south', function() {
      playerTest.move('south');
      expect(playerTest.getPosY()).to.equal(-1);
    });

    it('should move north', function() {
      playerTest.move('north');
      expect(playerTest.getPosY()).to.equal(1);
    });

  });
});