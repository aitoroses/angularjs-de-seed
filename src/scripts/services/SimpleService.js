'use strict';

angular.module('angularjsDE')
  .factory('SimpleService', function () {

    // Private Vars
    var innerState = 0;

    // Private Functions
    function inc() {
      return ++innerState;
    }

    function dec() {
      return --innerState;
    }

    function value(valueParam) {
      if (valueParam) {
        innerState = valueParam;
      }
      return innerState;
    }

    // Public API
    return {
      inc: function () {
        return inc();
      },
      dec: function () {
        return dec();
      },
      value: function (valueParam) {
        return value(valueParam);
      }
    };
  });
