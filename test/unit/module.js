'use strict';

describe('An angularjsDE module', function () {
  it('should exists', function () {

    var loadMainModule = function () {
      angular.module('angularjsDE');
    };

    expect(loadMainModule).not.toThrow();
  });
});