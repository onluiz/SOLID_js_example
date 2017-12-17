# S.O.L.I.D principles

Examples from: https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa

# Single responsibility principle

A class should have one and only one reason to change, meaning that a class should only have one job.

- worng_way.js -> The areaCalculator should only calculate the area and return the a unique result. In the wrong_way.js, the return is an HTML code, but if the user wants a JSON result?

- correct_way.js -> In the correct_way.js, areaCalculator takes care of calculating and sumCalculatorOutputter takes care of formatting the results. Each one has only one well defined job.

# Open-closed Principle

Objects or entities should be open for extension, but closed for modification.

Open for extension means that we should be able to add new features or components to the application without breaking existing code.

Closed for modification means that we should not introduce breaking changes to existing functionality, because that would force you to refactor a lot of existing code — Eric Elliott

- wrong_way.js -> In wrong_way.js, we can see a set of if/else in the sum function. It brokes the first rule where it says that Objects and entities should not receive modifications.

- correct_way.js -> In correct_way.js we put the area method inside it's classes
Bonus: to make sure the area method will exist in the factories function, we create an interface called shapeInterface

# Liskov substitution principle

Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.

A subclass should override the parent class methods in a way that does not break functionality from a client’s point of view.

- index.js -> volumeCalculator extends areaCalculator factory, making areaCalculator intact.

# Interface segregation principle

A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.

- wrong_way -> We added a method volume in shapeInterface, but not every class tha uses this interface will need this method, so it breaks de Interface Segregation Priciple.

- correct_way -> We create an interface (solidShapeInterface) for its own purpose. This way, no one has to implement an interface with methods that it will not use.

# Dependency inversion principle

Entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module, but they should depend on abstractions.

index.js -> We've done it before, on our manageShapeInterface. I'm still uderstanding this part, tho.