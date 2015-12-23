'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe('functional programming in es6 tests', function () {

    'use strict';

    it('should allow a new compact syntax known as arrow functions', function () {

        var numbers = [1, 2, 3, 4];

        var sum = 0;

        numbers.forEach(function (n) {
            return sum += n;
        });
        expect(sum).toBe(10);

        var newArray = numbers.map(function (n) {
            return n * n;
        });
        expect(newArray[3]).toBe(16);
    });

    it("demo iterators at a low level", function () {

        var numbers = [1, 2, 3, 4];
        var sum = 0;

        //seems like entries() is the way to get an iterator from an array, although the tutorial showed a function called values().
        var iterator = numbers.entries();
        var next = iterator.next();

        while (!next.done) {

            sum += numbers[next.value[0]];
            next = iterator.next();
        }

        expect(sum).toBe(10);
    });

    it("demos the symbol.iterator property of an iterable object", function () {

        var sum = 0;
        var numbers = [2, 4, 6, 8];
        var iterator = numbers[Symbol.iterator]();
        var next = iterator.next();

        while (!next.done) {
            sum += next.value;
            next = iterator.next();
        }

        expect(sum).toBe(20);
    });

    it("demo the for-of loop", function () {

        var numbers = [5, 6, 7, 8];
        var sum = 0;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var n = _step.value;

                sum += n;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        expect(sum).toBe(26);
    });

    it("should create a custom array iterator and use it to iterate", function () {
        var Company = (function () {
            function Company(employees) {
                _classCallCheck(this, Company);

                this.employees = employees;
            }

            _createClass(Company, [{
                key: 'addEmployess',
                value: function addEmployess() {
                    for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
                        names[_key] = arguments[_key];
                    }

                    this.employess = this.employees.concat(names);
                }
            }, {
                key: Symbol.iterator,
                value: function value() {
                    return new ArrayIterator(this.employees);
                }
            }]);

            return Company;
        })();

        var ArrayIterator = (function () {
            function ArrayIterator(array) {
                _classCallCheck(this, ArrayIterator);

                this.array = array;
                this.index = 0;
            }

            _createClass(ArrayIterator, [{
                key: 'next',
                value: function next() {
                    var result = { value: undefined, done: true };
                    if (this.index < this.array.length) {
                        result.value = this.array[this.index];
                        result.done = false;
                        this.index += 1;
                    }
                    return result;
                }
            }]);

            return ArrayIterator;
        })();

        var myCompany = new Company(["Tim", "Chris", "Bill"]);
        var count = 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = myCompany[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var n = _step2.value;

                count += 1;
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        expect(count).toBe(3);
    });

    //this requires importing of babel-polyfill
    it("should demo a generator function - requires importing of babel-polyfill", function () {

        var numbers = _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return 1;

                        case 2:
                            _context.next = 4;
                            return 2;

                        case 4:
                            _context.next = 6;
                            return 3;

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
        var sum = 0;

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = numbers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var n = _step3.value;

                sum += n;
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }

        expect(sum).toBe(6);
    });

    // it("should use a [Symbol.iterator] generator inside a custom class", function(){
    //            
    //     class Company{
    //         constructor(employees){
    //             this.employees = employees;
    //         }
    //         addEmployess(...names){
    //             this.employess = this.employees.concat(names);
    //         }
    //         * [Symbol.iterator](){
    //             for(let e of this.employess){
    //                 yield e;
    //             }
    //         }
    //     }
    //            
    //     let myCompany = new Company(["Tim", "Chris", "Bill"]);
    //     let count = 0;
    //     for(let n of myCompany){
    //         count +=1;
    //     }
    //            
    //     expect(count).toBe(3);
    //    
    // })
});