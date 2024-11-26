var oldValue = context.variableManager.getValue("oldData.p.Param"); 

var writeValue = new java.io.FileWriter("C:\\Users\\Tricentis\\Documents\\NeoLoad Projects\\Training\\custom-resources\\NewData.txt", true);
writeValue.write(oldValue);
writeValue.write("\r\n");
writeValue.close();