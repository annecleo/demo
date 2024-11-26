var oldValue = context.variableManager.getValue("Test1.p_Param"); 
context.variableManager.setValue("secondValue",oldValue);

var newValue = context.variableManager.getValue("secondValue"); 
logger.debug("Use data= "+ newValue);