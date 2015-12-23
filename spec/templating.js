describe('pluralsight templating', function(){
    //here are some comments...
    'use strict';
    	
	it('should define a variable with traditional var scoping - i.e. hoisting', function(){
		
		var doWork = function(flag){
			
			if(flag){
				var x=3;
			}
			return x;
		}
		
		var blah = doWork(true);
		expect(blah).toBe(3);
	})
	
	it('should define a variable with the let keyword', function(){
		
		var doWork = function(flag){
			
			let x =null;
			if(flag){
				x=3;
			}
			return x;
		}
		
		var blah = doWork(true);
		expect(blah).toBe(3);
	})
	
	it('should replace a value in a string using the templating single-tick', function(){
		
		//needed to add jsconfig.json file to the root of the project
		let doWork = function(name){
			
			return `Hello, ${name}`;
		};
		
		let result = doWork("Scott");
		expect(result).toBe("Hello, Scott");
		
	});
	
	it('should create and execute a method in a new ES6 class', function(){
		
		class Employee{
			doWork(){
				return "complete!";
			}
			getName(){
				return "Mike";
			}
		}
		
		let e = new Employee();
		expect(e.doWork()).toBe("complete!");
		expect(e.getName()).toBe("Mike");
		
	})
	
	it('should make use of a constructor', function(){
		class Employee{
			constructor(name){
				this._name = name;
			}
			doWork(){
				return "complete!";
			}
			getName(){
				return this._name;
			}
		}	
		let e1 = new Employee("Mike");
		let e2 = new Employee("Chris");
		
		expect(e1.getName()).toBe("Mike");
		expect(e2.getName()).toBe("Chris");
	})
	
	it('should also work with getters and setters', function(){
		class Employee{
			constructor(name){
				this.name = name;
			}
			doWork(){
				return "complete!";
			}
			get name(){
				return this._name;
			}
			set name(newName){
				this._name = newName;
			}
		}	
		let e1 = new Employee("Mike");
		let e2 = new Employee("Chris");
		
		expect(e1.name).toBe("Mike");
		expect(e2.name).toBe("Chris");
		
		e1.name = "Chris";
		expect(e1.name).toBe("Chris");
		
	})
	
});