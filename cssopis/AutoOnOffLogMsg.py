from org.csstudio.opibuilder.scriptUtil import PVUtil

text = PVUtil.getString(pvs[0])

logText = widget.getPropertyValue("text")

if text == 'StandBy...':
	logText = text
else:
	logText = logText + '\n' + text

widget.setPropertyValue("text", logText)