/**
 * 
 */

let person = {
  name: 'Rach',
  age: 24,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);
person.hobbies=['Swimming', 'Eating'];
console.log(person['hobbies']);		

// using THIS

let person = {
		  name: 'Tyron',
		  age: 40,
		  weekendAlarm: 'No alarms needed',
		  weekAlarm: 'Alarm set to 7AM',
		  
		  sayHello: function() {
		    return `Hello, my name is ${this.name}`
		  }
}

// using THIS to access a function in another scope

let friend = {
		  name: 'Lebron'
		};

		friend.sayHello = person.sayHello;

		console.log(friend.sayHello());
		console.log(person.sayHello());

// SETTERS and using TYPEOF				
//prepended the property names with underscore to indicate a property that should not be modifyed directly by other code
		
		let restaurant = {
				  _name: 'Italian Bistro',
				  _seatingCapacity: 120,
				  _hasDineInSpecial: true,
				  _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

				  set seatingCapacity(newCapacity) {
				      if (typeof newCapacity === 'number') {
				        this._seatingCapacity = newCapacity;
				      console.log(`${newCapacity} is valid input.`);
				    } else {
				        console.log(`Change ${newCapacity} to a number.`)
				    }
				  }
				}

		
		let person = {
				  _name: 'Lu Xun',
				  _age: 137,
				  
				  set age(ageIn) {
					    if (typeof ageIn === 'number') {
					      this._age = ageIn;
					    }
					    else {
					      console.log('Invalid input');
					      return 'Invalid input';
					    }
					  },
					  
					  get age() {
					    console.log(`${this._name} is ${this._age} years old.`);
					    return this._age;
					  }

					};
		
					console.log(person.age);
		

					
				  

