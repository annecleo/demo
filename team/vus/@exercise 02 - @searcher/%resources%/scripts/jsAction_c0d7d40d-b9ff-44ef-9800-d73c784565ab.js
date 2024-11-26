var oldValue = context.variableManager.getValue("Test1.p_Param"); 
context.variableManager.setValue("newValue",oldValue);

logger.debug("Use data= "+oldValue);