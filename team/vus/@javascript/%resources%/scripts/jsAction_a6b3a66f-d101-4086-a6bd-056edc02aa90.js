var valueId;

var valueId = context.variableManager.getValue(context.currentVU.id);
var valueId = context.variableManager.setValue(context.currentVU.id);
logger.debug(context.currentVU.id);

/*var writerLogId = new java.io.FileWriter("C:\\Users\\Tricentis\\Downloads\\Log.txt",true);
writerLogId.writer(valueId);
writerLogId.writer("\r\n")
writerLogId.writer.close();*/