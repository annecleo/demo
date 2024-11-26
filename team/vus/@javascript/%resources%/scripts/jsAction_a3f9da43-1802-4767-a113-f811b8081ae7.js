var lock = new java.util.concurrent.locks.ReentrantLock();
var date = context.variableManager.getValue("CurrentDate");

if (date==null)

{
context.fail(“Variable CurrentDate not found”);
}

function writeFile(text)
{
lock.lock();
var writer = new java.io.FileWriter(“c:\log.txt”,true);
writer.write(date+”;”+context.currentVU.id+”;”+text);
writer.write(“rn”);
writer.close();
lock.unlock();
}