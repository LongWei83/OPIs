importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var value0 = PVUtil.getDouble(pvs[0]);

if(value0 < 0)
	pvs[0].setValue(0);