importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var value0 = PVUtil.getDouble(pvs[0]);

if(value0 == 0)
	widget.setPropertyValue("off_image","no.jpg");
else
    widget.setPropertyValue("off_image","yes.jpg");
