'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

describe('destructuring demo', function () {

    'use strict';

    it('method can destructure array', function () {

        var doWork = function doWork() {
            return [3, 2];
        };

        var _doWork = doWork();

        var _doWork2 = _slicedToArray(_doWork, 2);

        var x = _doWork2[0];
        var y = _doWork2[1];

        expect(x).toBe(3);
        expect(y).toBe(2);
    });

    it('can destructure an object', function () {

        var doWork = function doWork() {
            return {
                firstName: "mike",
                lastName: "blom",
                twitter: "blomster"
            };
        };

        //take the value from the returned object, and put it into the second parameter
        //(i.e. take the value of firstName and put it into a variable called first)

        var _doWork3 = doWork();

        var first = _doWork3.firstName;
        var last = _doWork3.lastName;
        var twit = _doWork3.twitter;

        expect(first).toBe("mike");
        expect(last).toBe("blom");
        expect(twit).toBe("blomster");
    });
});