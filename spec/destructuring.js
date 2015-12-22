


describe('destructuring demo', function(){
    
    'use strict';
    
    it('method can destructure array', function(){
        
        let doWork= function(){
            return [3,2];
        }
        
        let [x,y] = doWork();
        
        expect(x).toBe(3);
        expect(y).toBe(2);
                
    })
    
    it('can destructure an object', function(){
        
        let doWork = function(){
            return {
                firstName:"mike",
                lastName:"blom",
                twitter:"blomster"
            }            
        }
        
        //take the value from the returned object, and put it into the second parameter 
        //(i.e. take the value of firstName and put it into a variable called first)
        let {firstName:first, lastName:last, twitter: twit} = doWork();
        
        expect(first).toBe("mike");
        expect(last).toBe("blom");
        expect(twit).toBe("blomster");
        
    })
})