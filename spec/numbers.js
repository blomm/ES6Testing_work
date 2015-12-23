describe('testing out numbers in es6', function(){
    
    it('should expose parseInt', function(){
        
        expect(Number.parseInt("3")).toBe(3);
    })
    
    it('should expose parseFloat', function(){
       
        expect(Number.parseFloat("3.5")).toBe(3.5);
    })
    
    it('should convert strings to numbers when calling isFinite', function(){
        
        expect(isFinite("1")).toBe(true);
        
    })
    
    it('should show that calling the static Number.isFinite does not convert strings', function(){
                
        expect(Number.isFinite("2")).toBe(false);
        
    })
    
    it('should not convert strings when calling Number.isNaN vs global isNaN', function(){
        
        expect(isNaN("NaN")).toBe(true);
        expect(Number.isNaN("NaN")).toBe(false);
        
    })
    
    it('should correctly identify integers', function(){
        
        expect(Number.isInteger(1)).toBe(true);
        expect(Number.isInteger(1.0)).toBe(true);
        expect(Number.isInteger(Number.parseInt("1"))).toBe(true);
        expect(Number.isInteger(1.5)).toBe(false);        
        
    })
        
})