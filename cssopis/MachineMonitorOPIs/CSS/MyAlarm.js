importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
importPackage(Packages.java.lang);

var v0=PVUtil.getDouble(pvs[0]);
var v1=PVUtil.getDouble(pvs[1]);
var v2=PVUtil.getDouble(pvs[2]);
var v3=PVUtil.getDouble(pvs[3]);
var v4=PVUtil.getDouble(pvs[4]);
var v5=PVUtil.getDouble(pvs[5]);
var v6=PVUtil.getDouble(pvs[6]);
var v7=PVUtil.getDouble(pvs[7]);

runnable = {
  run:function()
  {
    while(1)
    {
    if((v0 == 1)||(v1 == 1)||(v2 == 1)||(v3 == 1)||(v4 == 1)||(v5 == 1)||(v6 == 1)||(v7 == 1))
    widget.executeAction(0);
    Thread.sleep(5000);
    }
  }
};
new Thread(new Runnable(runnable)).start();