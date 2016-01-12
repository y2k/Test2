(function() {
	var screen = document.getElementById("screen");
	
	Analytics.roundReplay = function() {
		var dt = new Date().getTime() - Server.getTime();
		console.log("HACK :: dT = " + dt + " | floors = " + JSON.stringify(Server.floorsInfo[0]));

		tapTimes = [
			1000,
			500,
			500,
			500,
			500,
			500];
		resetTimer();
	}
	
	var resetTimer = function() {
		for (var i = 1; i < tapTimes.length; i++)
			tapTimes[i] = tapTimes[i] + tapTimes[i - 1];
		for (var i = 0; i < tapTimes.length; i++)
			tapTimes[i] = Server.getTime() + tapTimes[i];
		updateTimer();	
	}
	
	var updateTimer = function() {
		if (tapTimes[tapTimes.length - 1] == 0) return;

		for (var i = 0; i < tapTimes.length; i++) {
			if (tapTimes[i] != 0 && Server.getTime() > tapTimes[i]) {
				var clickEvent = document.createEvent("MouseEvents");
				clickEvent.initEvent("click", true, true);
				screen.dispatchEvent(clickEvent);
				
				console.log("HACK :: tap on screen | " + Server.getTime() + " | " + (new Date().getTime() % 100000));
				tapTimes[i] = 0;
				break;
			}
		}
		setTimeout(updateTimer, 10);
	}
})();
