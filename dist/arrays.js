'use strict';

describe('playing with Arrays', function () {

    it('should demo use of find on an array, which finds the first matching element', function () {

        var ary = [2, 6, 9];
        expect(ary.find(function (x) {
            return x > 6;
        })).toBe(9);
        expect(ary.find(function (x) {
            return x > 5;
        })).toBe(6);
    });

    it('should demo use of findIndex', function () {

        var ary = [2, 6, 9];
        expect(ary.findIndex(function (x) {
            return x > 6;
        })).toBe(2);
    });

    it('should demo use of fill with start and end indexes', function () {
        var ary = [2, 6, 9, 12, 15];
        ary.fill('a', 2, 3);

        expect(ary[1]).toBe(6);
        expect(ary[2]).toBe('a');
        expect(ary[3]).toBe(12);
    });

    it('should show how to get keys from array', function () {

        var ary = ['Jim', 'Kim', 'Bob'];
        var keys = ary.keys();

        var firstKey = keys.next().value;
        expect(firstKey).toBe(0);
    });

    it('should demo usage of entries on an array, each value is array of 2, the first the index, the second the value', function () {

        var ary = [2, 4, 6];
        var entries = ary.entries();

        var firstEntry = entries.next().value;

        expect(firstEntry[0]).toBe(0);
        expect(firstEntry[1]).toBe(2);
    });

    // it('should demo array comprehensions', function(){
    //    
    //     var ary = [for (i of [1,2,3]) i];
    //     expect(ary[1]).toBe(2);
    //    
    // })
});