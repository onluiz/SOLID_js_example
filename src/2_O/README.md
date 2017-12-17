# Open-closed Principle

Objects or entities should be open for extension, but closed for modification.

Open for extension means that we should be able to add new features or components to the application without breaking existing code.

Closed for modification means that we should not introduce breaking changes to existing functionality, because that would force you to refactor a lot of existing code — Eric Elliott

- wrong_way.js -> In wrong_way.js, we can see a set of if/else in the sum function. It brokes the first rule where it says that Objects and entities should not receive modifications.

- correct_way.js -> In correct_way.js we put the area method inside it's classes
Bonus: to make sure the area method will exist in the factories function, we create an interface called shapeInterface