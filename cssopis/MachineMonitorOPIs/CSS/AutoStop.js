importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
importPackage(Packages.java.lang);

runnable = {
	run:function()
{
display.getWidget("StopButton").setPropertyValue("visible",false);
pvs[1].setValue(0);
Thread.sleep(1000);
pvs[2].setValue(0);
Thread.sleep(1000);
pvs[3].setValue(0);
Thread.sleep(1000);
pvs[4].setValue(0);
Thread.sleep(1000);
pvs[5].setValue(12);
Thread.sleep(1000);
pvs[6].setValue(0);
display.getWidget("StopButton").setPropertyValue("visible",true);
}
};
thread0 = new Thread(new Runnable(runnable));
thread0.start();
