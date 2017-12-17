# Single responsibility principle

A class should have one and only one reason to change, meaning that a class should only have one job.

- worng_way.js -> The areaCalculator should only calculate the area and return the a unique result. In the wrong_way.js, the return is an HTML code, but if the user wants a JSON result?

- correct_way.js -> In the correct_way.js, areaCalculator takes care of calculating and sumCalculatorOutputter takes care of formatting the results. Each one has only one well defined job.