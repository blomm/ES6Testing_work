
describe('functional programming in es6 tests', function(){

    
    'use strict';
    
    it('should allow a new compact syntax known as arrow functions', function(){
        
        var numbers = [1,2,3,4];
        
        var sum = 0;
        
        numbers.forEach(n => sum += n);
        expect(sum).toBe(10);
        
        let newArray = numbers.map((n)=>n*n);
        expect(newArray[3]).toBe(16);
        
    })
    
    it("demo iterators at a low level", function(){
        
        let numbers = [1,2,3,4];
        let sum=0;
        
        //seems like entries() is the way to get an iterator from an array, although the tutorial showed a function called values().
        let iterator = numbers.entries();
        let next = iterator.next();
        
        while(!next.done){
            
            sum += numbers[next.value[0]];
            next = iterator.next();
        }
             
             
        expect(sum).toBe(10);
    })
    
    
    it("demos the symbol.iterator property of an iterable object", function(){
        
        let sum = 0;
        let numbers = [2,4,6,8];
        let iterator = numbers[Symbol.iterator]();
        let next = iterator.next();
        
        while(!next.done){
            sum += next.value;
            next = iterator.next();
        }
        
        expect(sum).toBe(20);
        
    })    
            
    it("demo the for-of loop", function(){
        
        let numbers = [5,6,7,8];
        let sum = 0;
        
        for(let n of numbers){
            sum += n;
        }
        expect(sum).toBe(26);
        
    })
    
    it("should create a custom array iterator and use it to iterate", function(){
        
        class Company{
            constructor(employees){
                this.employees = employees;
            }
            addEmployess(...names){
                this.employess = this.employees.concat(names);
            }
            [Symbol.iterator](){
                return new ArrayIterator(this.employees);
            }
        }
        
        
        class ArrayIterator{
            constructor(array){
                this.array = array;
                this.index = 0;
            }
            next(){
                let result = {value:undefined, done:true};
                if(this.index < this.array.length){
                    result.value =this.array[this.index];
                    result.done = false;
                    this.index += 1;
                }
                return result;
            }
        }
        
        let myCompany = new Company(["Tim", "Chris", "Bill"]); 
        let count = 0;
        for(let n of myCompany){
            count +=1;
        }
        
        expect(count).toBe(3);
    })
    
    //this requires importing of babel-polyfill
    it("should demo a generator function - requires importing of babel-polyfill", function(){
        
        let numbers = {
        [Symbol.iterator]:function*(){
            yield 1;
            yield 2;
            yield 3;
          }
        }
        let sum =0;
        
        for(let n of numbers){
            sum += n
        }        
        expect(sum).toBe(6);
        
    })
    
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
    
    
})