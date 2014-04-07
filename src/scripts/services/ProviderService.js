'use strict';

angular.module('angularjsDE')
  .provider('ProviderService', function () {

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

    this.setInitalState = function (value) {
      innerState = value;
    };

    // Public API
    this.$get = function () {
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
    };
  });
