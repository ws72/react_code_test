import { expect } from 'chai';
import {rand, generatedRooms} from '../src/util/generateRooms';

describe('Rooms', function() {
  describe('rand()', function() {
    it('should return Gold or Monster', function() {
      expect(rand()).to.be.oneOf(['GOLD','MONSTER']);
    });
  });


  describe('generatedRooms()', function() {
    it('should return rooms', function() {
      expect(generatedRooms(24)).to.have.length(24);
    });
  }); 
});