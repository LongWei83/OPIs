importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
importPackage(Packages.java.lang);

var backgroundColor = widget.getPropertyValue("background_color");

if(backgroundColor == "(71,103,204)")
{
	widget.setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(255,255,102));
	display.getWidget("LabelLlrf5").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(255,255,102));	
	display.getWidget("LabelRF5").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(255,255,102));	
	display.getWidget("LabelBS5").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(255,255,102));			
}
if(backgroundColor == "(255,255,102)")
{
	widget.setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(71,103,204));
	display.getWidget("LabelLlrf5").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(240,240,240));	
	display.getWidget("LabelRF5").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(240,240,240));	
	display.getWidget("LabelBS5").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(240,240,240));			
}