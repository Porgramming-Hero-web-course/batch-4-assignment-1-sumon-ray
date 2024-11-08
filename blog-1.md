#Protection with type guards


This is really important feature of TypeScript. It allows you to check types in your code to assure that your data-flow relies on the correct data types. Many people use it, without even knowing that it’s named “type guards”. Let’s go with examples.


## Why are Type Guards Necessary?

Type guards are essential because they give us a way to:

1. **Control Complex Data Types**: In real applications, you might deal with complex data structures where types can vary. Type guards help manage this uncertainty.

2. **Make Code Safer**: By telling TypeScript what type to expect, we prevent common runtime errors.

3. **Improve Readability**: Type guards make it clearer what type a variable is supposed to be, which can make your code easier to understand and maintain.

4. **Allow Conditional Code**: Sometimes, you need to do different things depending on a variable's type. Type guards let us write type-specific code sections safely.



## Types of Type Guards and Their Use Cases 

### 1. typeof Type Guard

The typeof type guard is useful for checking primitive types like string, number, and boolean.


function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String value:", value.toUpperCase());
  } else {
    console.log("Number value:", value.toFixed(2));
  }
}


### 2. instanceof Type Guard 

The instanceof type guard is great for checking if an object belongs to a particular class.


class Animal {
  makeSound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

function handleAnimal(animal: Animal) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.makeSound();
  }
}



### 3. in Type Guard

The in type guard checks if an object has a specific property. This is especially useful for union types with objects that have unique properties.


type Circle = { shape: "circle"; radius: number };
type Rectangle = { shape: "rectangle"; width: number; height: number };

function calculateArea(shape: Circle | Rectangle) {
  if ("radius" in shape) {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.width * shape.height;
  }
}



### 4. Custom Type Guard Function

You can also create your own type guard functions using the is keyword. This is particularly useful for complex types or when you want to make the type guard reusable.



type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}
