import { expect } from 'chai';
import direction from '../src/app/direction';

describe('direction', function() {

    it('should return EAST', function() {
        expect(direction.EAST).to.equal('east');
    });
    it('should return west', function() {
        expect(direction.WEST).to.equal('west');
    });
    it('should return south', function() {
        expect(direction.SOUTH).to.equal('south');
    });
    it('should return north', function() {
        expect(direction.NORTH).to.equal('north');
    });
});