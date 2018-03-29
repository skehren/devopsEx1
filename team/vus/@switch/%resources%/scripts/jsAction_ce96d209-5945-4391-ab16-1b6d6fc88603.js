// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var random = context.variableManager.getValue("random");
if (random==null) {
        context.fail("Variable 'random' not found");
}

var loop_count = context.variableManager.getValue("loop_counter");
if (loop_count==null) {
        context.fail("Variable 'loop_count' not found");
}

// Do some computation using the methods
// you defined in the JS Library

logger.debug("Wert der Variable Random in der "+random+" Iteration: "+loop_count);

// Inject the computed value in a runtime variable
//context.variableManager.setValue("computedVar",computedValue);
