importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
importPackage(Packages.java.lang);

runnable = {
	run:function()
		{	
			while(1){
				var rcs_rf_date = new Date();
				widget.setPropertyValue("text", "date: "+rcs_rf_date.toString());
				Thread.sleep(1000);
			}
		}	
	};		

new Thread(new Runnable(runnable)).start();