# Interface segregation principle

A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.

- wrong_way -> We added a method volume in shapeInterface, but not every class tha uses this interface will need this method, so it breaks de Interface Segregation Priciple.

- correct_way -> We create an interface (solidShapeInterface) for its own purpose. This way, no one has to implement an interface with methods that it will not use.