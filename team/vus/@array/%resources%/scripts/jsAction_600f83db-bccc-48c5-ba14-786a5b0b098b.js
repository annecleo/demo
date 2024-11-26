var fruits = ["Banana", "Orange", "Apple", "Mango"];

var iterator = fruits.values();

var finalVal = iterator.next().value;

logger.debug("Value="+finalVal);