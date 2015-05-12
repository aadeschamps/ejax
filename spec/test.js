var sinon = require('sinon'),
    chai = require('chai'),
    mocha = require('mocha'),
    url = "http://randomthoughts.link/thoughts",
    ejax = require('../lib/ejax-simple.js'),
    expect = chai.expect;


describe('EJAX', function(){

  describe('ejax get request method', function(){
    it('should be \'get\' request method', function(){
      expect(typeof ejax.get).to.eq('function');
    });
  });

  describe('ejax put request method', function(){
    it('should be \'put\' request method', function(){
      expect(typeof ejax.put).to.eq('function');
    });
  });

  describe('ejax post request method', function(){
    it('should be \'post\' request method', function(){
      expect(typeof ejax.post).to.eq('function');
    });
  });

  describe('ejax delete request method', function(){
    it('should be \'delete\' request method', function(){
      expect(typeof ejax.del).to.eq('function');
    });
  });

});
