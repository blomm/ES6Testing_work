'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe('pluralsight templating', function () {
	//here are some comments...
	'use strict';

	it('should define a variable with traditional var scoping - i.e. hoisting', function () {

		var doWork = function doWork(flag) {

			if (flag) {
				var x = 3;
			}
			return x;
		};

		var blah = doWork(true);
		expect(blah).toBe(3);
	});

	it('should define a variable with the let keyword', function () {

		var doWork = function doWork(flag) {

			var x = null;
			if (flag) {
				x = 3;
			}
			return x;
		};

		var blah = doWork(true);
		expect(blah).toBe(3);
	});

	it('should replace a value in a string using the templating single-tick', function () {

		//needed to add jsconfig.json file to the root of the project
		var doWork = function doWork(name) {

			return 'Hello, ' + name;
		};

		var result = doWork("Scott");
		expect(result).toBe("Hello, Scott");
	});

	it('should create and execute a method in a new ES6 class', function () {
		var Employee = (function () {
			function Employee() {
				_classCallCheck(this, Employee);
			}

			_createClass(Employee, [{
				key: 'doWork',
				value: function doWork() {
					return "complete!";
				}
			}, {
				key: 'getName',
				value: function getName() {
					return "Mike";
				}
			}]);

			return Employee;
		})();

		var e = new Employee();
		expect(e.doWork()).toBe("complete!");
		expect(e.getName()).toBe("Mike");
	});

	it('should make use of a constructor', function () {
		var Employee = (function () {
			function Employee(name) {
				_classCallCheck(this, Employee);

				this._name = name;
			}

			_createClass(Employee, [{
				key: 'doWork',
				value: function doWork() {
					return "complete!";
				}
			}, {
				key: 'getName',
				value: function getName() {
					return this._name;
				}
			}]);

			return Employee;
		})();

		var e1 = new Employee("Mike");
		var e2 = new Employee("Chris");

		expect(e1.getName()).toBe("Mike");
		expect(e2.getName()).toBe("Chris");
	});

	it('should also work with getters and setters', function () {
		var Employee = (function () {
			function Employee(name) {
				_classCallCheck(this, Employee);

				this.name = name;
			}

			_createClass(Employee, [{
				key: 'doWork',
				value: function doWork() {
					return "complete!";
				}
			}, {
				key: 'name',
				get: function get() {
					return this._name;
				},
				set: function set(newName) {
					this._name = newName;
				}
			}]);

			return Employee;
		})();

		var e1 = new Employee("Mike");
		var e2 = new Employee("Chris");

		expect(e1.name).toBe("Mike");
		expect(e2.name).toBe("Chris");

		e1.name = "Chris";
		expect(e1.name).toBe("Chris");
	});
});