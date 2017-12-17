# Liskov substitution principle

Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.

A subclass should override the parent class methods in a way that does not break functionality from a client’s point of view.

- index.js -> volumeCalculator extends areaCalculator factory, making areaCalculator intact.