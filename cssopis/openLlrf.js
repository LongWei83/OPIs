importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
importPackage(Packages.java.lang);

var backgroundColor = widget.getPropertyValue("background_color");

if(backgroundColor == "(51,102,153)")
{
	widget.setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(34,160,210));
	display.getWidget("LabelLlrf1").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(255,255,102));	
	display.getWidget("LabelLlrf2").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(255,255,102));	
	display.getWidget("LabelLlrf3").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(255,255,102));	
	display.getWidget("LabelLlrf4").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(255,255,102));	
	display.getWidget("LabelLlrf5").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(255,255,102));	
	display.getWidget("LabelLlrf6").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(255,255,102));	
	display.getWidget("LabelLlrf7").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(255,255,102));	
	display.getWidget("LabelLlrf8").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(255,255,102));	
}
if(backgroundColor == "(34,160,210)")
{
	widget.setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(51,102,153));
	display.getWidget("LabelLlrf1").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(240,240,240));	
	display.getWidget("LabelLlrf2").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(240,240,240));	
	display.getWidget("LabelLlrf3").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(240,240,240));	
	display.getWidget("LabelLlrf4").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(240,240,240));	
	display.getWidget("LabelLlrf5").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(240,240,240));	
	display.getWidget("LabelLlrf6").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(240,240,240));	
	display.getWidget("LabelLlrf7").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(240,240,240));	
	display.getWidget("LabelLlrf8").setPropertyValue("background_color",ColorFontUtil.getColorFromRGB(240,240,240));	
}