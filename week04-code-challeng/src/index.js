import { people } from './dataobject.js';

const currentYear = 2023; 

people.map(p => {

    p.age = currentYear - p.birthYear; 
});

console.log(people);

