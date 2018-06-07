import { expect } from 'chai';
import game from '../src/app/game';
import sinon from 'sinon';
import axios from 'axios';

describe('game', function() {

    describe('verifyPosition()', function() {

        let gameTest;
        beforeEach(function() {
            gameTest = new game();
        });
        

        it('should return EAST', function() {
            expect(gameTest.verifyPosition(1,1)).to.equal(true);
            expect(gameTest.verifyPosition(23,23)).to.equal(true);
        });
        
        it('should return false', function() {
            expect(gameTest.verifyPosition(-1,1)).to.equal(false);
            expect(gameTest.verifyPosition(-1,-23)).to.equal(false);
        });
    });


    
    describe('gotoRoom()', function() {
        let sandbox;
        let server;
        let gameTest;
        beforeEach(function() {
            gameTest = new game();
            sandbox = sinon.sandbox.create();
            server = sandbox.useFakeServer();
        });
        afterEach(() => {
            server.restore();
            sandbox.restore();
        });
        
        it('should return true for gotoRoom', function(done) {
            
            const resolved = new Promise((r) => r({ data: 'test' }));
            sandbox.stub(axios, 'get').returns(resolved);

            gameTest.gotoRoom(1,1)
            .then((result) => {
                expect(result).to.equal('test') })
            .then(done, done);
        });
    });

    describe('execute()', function() {
        let sandbox;
        let server;
        let gameTest;
        beforeEach(function() {
            gameTest = new game();
            sandbox = sinon.sandbox.create();
            server = sandbox.useFakeServer();
        });
        afterEach(() => {
            server.restore();
            sandbox.restore();
        });
        
        it('should return true for execute', function(done) {
            
            const resolved = new Promise((r) => r({ data: 'MONSTER' }));
            sandbox.stub(gameTest, 'execute').returns(resolved);

            let test = gameTest.execute('east')
            test.then(() => {
                expect(gameTest.status).to.equal('MONSTER');
            });
            done();
        });
    });
});