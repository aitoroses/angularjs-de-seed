'use strict';

describe('A ProviderServiceProvider', function () {

  var ProviderServiceProvider,
    ProviderService,
    initState = 1234;

  beforeEach(module('angularjsDE', function (_ProviderServiceProvider_) {
    ProviderServiceProvider = _ProviderServiceProvider_;
    //ProviderServiceProvider.setInitalState(initState);
  }));

  beforeEach(inject(function (_ProviderService_) {
    ProviderService = _ProviderService_;
  }));

  it('should be defined', function () {
    expect(ProviderServiceProvider).toBeDefined();
  });

  describe('Public API', function () {

    it('should provide a "setInitalState" function', function () {
      expect(ProviderServiceProvider.setInitalState).toBeDefined();
      expect(typeof ProviderServiceProvider.setInitalState).toBe('function');
    });

  });

  describe('"setInitalState" function', function () {

    it('should set the initalState', function () {
      ProviderServiceProvider.setInitalState(initState);
      expect(ProviderService.value()).toBe(initState);
    });

  });

});

describe('A ProviderService', function () {

  var ProviderService;

  beforeEach(module('angularjsDE'));

  beforeEach(inject(function (_ProviderService_) {
    ProviderService = _ProviderService_;
  }));

  describe('Public API', function () {

    it('should provide an service-object', function () {
      expect(typeof ProviderService).toBe('object');
    });

    it('should provide an "inc" function', function () {
      expect(ProviderService.inc).toBeDefined();
      expect(typeof ProviderService.inc).toBe('function');
    });

    it('should provide an "dec" function', function () {
      expect(ProviderService.inc).toBeDefined();
      expect(typeof ProviderService.inc).toBe('function');
    });

    it('should provide an "value" function', function () {
      expect(ProviderService.inc).toBeDefined();
      expect(typeof ProviderService.inc).toBe('function');
    });

  });

  describe('value function', function () {

    var exampleNumber = 100;

    it('should init value with 0', function () {
      expect(ProviderService.value()).toBe(0);
    });

    it('should set the current value', function () {
      expect(ProviderService.value()).toBe(0);
      ProviderService.value(exampleNumber);
      expect(ProviderService.value()).toBe(exampleNumber);
    });

    it('should get the current value', function () {
      expect(ProviderService.value()).toBe(0);
      ProviderService.value(1);
      expect(ProviderService.value()).toBe(1);
    });

  });

  describe('inc function', function () {

    it('should increment the value by 1', function () {
      expect(ProviderService.value()).toBe(0);
      ProviderService.inc();
      expect(ProviderService.value()).toBe(1);
      ProviderService.inc();
      expect(ProviderService.value()).toBe(2);
    });

  });

  describe('dec function', function () {

    it('should decrement the value by 1', function () {
      expect(ProviderService.value()).toBe(0);
      ProviderService.dec();
      expect(ProviderService.value()).toBe(-1);
      ProviderService.dec();
      expect(ProviderService.value()).toBe(-2);
    });

  });

});