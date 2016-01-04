describe('sets', function(){
    
    it('should demo simple add and delete of sets', function(){
        
        let set = new Set();
        set.add(1);
        set.add(2);
        expect(set.size).toBe(2);
        set.delete(2);
        expect(set.size).toBe(1);
    })
    
    it('should demo iterating of sets with forEach', function(){
        
        let count = 0;
        
        let set = new Set();
        set.add('Jim');
        set.add('Bob');
        set.add('Carl');
                
        set.forEach(() => count++);
        
        
        expect(count).toBe(3);
        
        count=0;
        let setB = new Set(['Jim','Bob','Carl']);
        setB.forEach(() => count++);
        expect(count).toBe(3);
    })
    
    it('should show support for of iteration', function(){
        
        let set = new Set([1,2,3]);
        let count = 0;
        for(let a of set){
            count++;
        }
        expect(count).toBe(3)
    })
    
    it('should demo use of entries call on sets', function(){
                
        let set = new Set([2,4,6]);
        let entries = set.entries();
        
        let firstval = entries.next().value;
        let secondval = entries.next().value;


        expect(firstval[0]).toBe(2);
        //expect(firstval[1]).toBe(0);
          
              
                
        // expect(secondval[0]).toBe(4);     
        // expect(secondval[1]).toBe(1);         
    })
})