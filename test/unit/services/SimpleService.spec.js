'use strict';

describe('A SimpleService', function () {

  var SimpleService;

  beforeEach(module('angularjsDE'));

  beforeEach(inject(function (_SimpleService_) {
    SimpleService = _SimpleService_;
  }));

  describe('Public API', function () {

    it('should provide an service-object', function () {
      expect(typeof SimpleService).toBe('object');
    });

    it('should provide an "inc" function', function () {
      expect(SimpleService.inc).toBeDefined();
      expect(typeof SimpleService.inc).toBe('function');
    });

    it('should provide an "dec" function', function () {
      expect(SimpleService.inc).toBeDefined();
      expect(typeof SimpleService.inc).toBe('function');
    });

    it('should provide an "value" function', function () {
      expect(SimpleService.inc).toBeDefined();
      expect(typeof SimpleService.inc).toBe('function');
    });

  });

  describe('value function', function () {

    var exampleNumber = 100;

    it('should init value with 0', function () {
      expect(SimpleService.value()).toBe(0);
    });

    it('should set the current value', function () {
      expect(SimpleService.value()).toBe(0);
      SimpleService.value(exampleNumber);
      expect(SimpleService.value()).toBe(exampleNumber);
    });

    it('should get the current value', function () {
      expect(SimpleService.value()).toBe(0);
      SimpleService.value(1);
      expect(SimpleService.value()).toBe(1);
    });

  });

  describe('inc function', function () {

    it('should increment the value by 1', function () {
      expect(SimpleService.value()).toBe(0);
      SimpleService.inc();
      expect(SimpleService.value()).toBe(1);
      SimpleService.inc();
      expect(SimpleService.value()).toBe(2);
    });

  });

  describe('dec function', function () {

    it('should decrement the value by 1', function () {
      expect(SimpleService.value()).toBe(0);
      SimpleService.dec();
      expect(SimpleService.value()).toBe(-1);
      SimpleService.dec();
      expect(SimpleService.value()).toBe(-2);
    });

  });

});