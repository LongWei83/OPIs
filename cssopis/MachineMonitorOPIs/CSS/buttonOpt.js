importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var value0 = PVUtil.getDouble(pvs[0]);

if(value0 == 1)
	widget.setPropertyValue("foreground_color",ColorFontUtil.getColorFromRGB(0,153,204));
else
	widget.setPropertyValue("foreground_color",ColorFontUtil.getColorFromRGB(0,0,64));
