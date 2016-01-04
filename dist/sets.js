'use strict';

describe('sets', function () {

    it('should demo simple add and delete of sets', function () {

        var set = new Set();
        set.add(1);
        set.add(2);
        expect(set.size).toBe(2);
        set.delete(2);
        expect(set.size).toBe(1);
    });

    it('should demo iterating of sets with forEach', function () {

        var count = 0;

        var set = new Set();
        set.add('Jim');
        set.add('Bob');
        set.add('Carl');

        set.forEach(function () {
            return count++;
        });

        expect(count).toBe(3);

        count = 0;
        var setB = new Set(['Jim', 'Bob', 'Carl']);
        setB.forEach(function () {
            return count++;
        });
        expect(count).toBe(3);
    });

    it('should show support for of iteration', function () {

        var set = new Set([1, 2, 3]);
        var count = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = set[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var a = _step.value;

                count++;
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

        expect(count).toBe(3);
    });

    it('should demo use of entries call on sets', function () {

        var set = new Set([2, 4, 6]);
        var entries = set.entries();

        var firstval = entries.next().value;
        var secondval = entries.next().value;

        expect(firstval[0]).toBe(2);
        //expect(firstval[1]).toBe(0);

        // expect(secondval[0]).toBe(4);    
        // expect(secondval[1]).toBe(1);       
    });
});