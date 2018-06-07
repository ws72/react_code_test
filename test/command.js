/// <reference path="../../typings/index.d.ts" />

import { expect } from 'chai';
import command from '../src/app/command';

describe('command', function() {

    let commandTest;
    beforeEach(function() {
        commandTest = new command('east');
    });
    
    it('should return EAST', function() {
        expect(commandTest.toString()).to.equal('east');
    });
});