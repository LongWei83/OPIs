importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var value0 = PVUtil.getDouble(pvs[0]);

if(value0 == 1)
	pvs[0].setValue(0);
else
	pvs[0].setValue(1);
