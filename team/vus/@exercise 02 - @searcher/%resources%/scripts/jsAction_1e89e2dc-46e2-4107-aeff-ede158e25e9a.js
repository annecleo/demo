var secondValue = context.variableManager.getValue("newValue"); 
context.variableManager.setValue("newValue",secondValue);

logger.debug("Use data= "+secondValue);