angularjs-de-seed
=================

This is an AnguarJS Seed / Blueprint that we offer our customers for projects that we manage.
We running this over 2 years very successful now.
If you like to improve some parts of this, feel free to send us a PR.
If you don't like this initial structure - feel free to use your own :)

## Done
* Basic Project structure
* Testing
	* Helpers
		* [Karma](https://github.com/angularjs-de/angularjs-de-seed/blob/master/karma.conf.js) + [NPM Packages](https://github.com/angularjs-de/angularjs-de-seed/blob/master/package.json)
	* of AngularJS Concepts	(Unit Testing)
		* Services
			* [Factory](https://github.com/angularjs-de/angularjs-de-seed/blob/master/src/scripts/services/SimpleService.js) + [Test](https://github.com/angularjs-de/angularjs-de-seed/blob/master/test/unit/services/SimpleService.spec.js)
    		* [Provider](https://github.com/angularjs-de/angularjs-de-seed/blob/master/src/scripts/services/ProviderService.js) + [Test](https://github.com/angularjs-de/angularjs-de-seed/blob/master/test/unit/services/ProviderService.spec.js)

## TODO
* Project Build
    * ngMin
    * ngDocs
    * clean
    * jshint
    * conventional-changelog
    * Minify
    * Concat
    * Grunt/Gulp
* Testing
	* Helpers
		* Jasmine Spies
		* ng-html2js
		* Protractor
	* of AngularJS Concepts	(Unit Testing)
		* Directives
			* No new Scope
			* New Scope
			* Isolated Scope
			* HTML Templates ($httpBackend /)
			* CSS-Styles / Regex
			* jQuery wrapper
		* Controllers
			* Simple
			* ControllerAs
		* Filter
			* Simple
		* Services
			* Public-API
			* That use $http
		* Async Events
			* HTTPBackend
			* Promises
			* Timeout / Interval
	* Mocking
		* HTTP
		* frameworks/libs (jQuery/LeapJS/..)
	* E2E
		* Protractor
			* Drag n Drop
    * CI Integration