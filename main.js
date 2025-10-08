import { LinkedList } from './list.js';


const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(1)); // cat node
console.log(list.at(0)); // dog node
console.log(list.at(-5)); // Error
console.log(list.at('ice cream')); // Error
console.log(list.at(100)); // Too high
console.log(list.at(5)); // turtle
console.log(list.toString());

list.prepend("axolotl");

console.log(list.toString());

list.pop();

console.log(list.toString());
console.log(list.contains('snake')); // true
console.log(list.contains('ice cream')); // false
console.log(list.find('snake')); // 5
console.log(list.find('ice cream')); // null

list.insertAt('capybara', 3); // cat -> capybara -> parrot
console.log(list.toString());

list.removeAt(3); // cat -> parrot
console.log(list.toString());
