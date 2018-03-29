// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var myVar = context.variableManager.getValue("TitleToCheck");
if (myVar==null) {
        context.fail("Variable 'myVar' not found");
}

// Do some computation using the methods
// you defined in the JS Library
logger.error("Value not found="+myVar);