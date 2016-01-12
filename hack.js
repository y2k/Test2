(function() {
	var screen = document.getElementById("screen");
	var tapTimes = null;
	
	Analytics.roundReplay = function() {
		// var dt = new Date().getTime() - Server.getTime();
		// console.log("HACK :: dT = " + dt + " | floors = " + JSON.stringify(Server.floorsInfo[0]));
		console.log("HACK :: INITIALIZE");

		tapTimes = [0, 600, 600, 600, 600, 600];
		resetTimer();
	}
	
	var resetTimer = function() {
		var x = Math.PI - ((Server.getTime() * 0.001 * Server.floorsInfo[0].speed + Server.floorsInfo[0].phase) % Math.PI);
		var delay = (2 * Math.PI + x) / (0.001 * Server.floorsInfo[0].speed + Server.floorsInfo[0].phase)

		console.log("HACK :: DELAY = " + delay);

		for (var i = 1; i < tapTimes.length; i++)
			tapTimes[i] = tapTimes[i] + tapTimes[i - 1];
		for (var i = 0; i < tapTimes.length; i++)
			tapTimes[i] = tapTimes[i] + Server.getTime() + delay;
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
