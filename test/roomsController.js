import { expect } from 'chai';
import {getRoomInfo} from '../src/controllers/roomsController';
import sinon from 'sinon';


describe("Routes", function() {
  describe("GET rooms info", function() {

      it("should respond", function() {
        var req,res,spy;

        req = {params:{x:1,y:1}};
        res = {};
        spy = res.send = sinon.spy();

        getRoomInfo(req, res);
        expect(spy.calledOnce).to.equal(true);
      });     

  });
});