(function() {
	var screen = document.getElementById("screen");
	var tapTimes = null;
	
	Analytics.roundReplay = function() {
		// console.log("HACK :: INITIALIZE");

		tapTimes = [500, 500, 600, 600, 600, 500, 600, 600, 600, 600, 600, 800, 600, 600];
		resetTimer();
	}
	
	var resetTimer = function() {
		var a = (Server.getTime() * 0.001 * Server.floorsInfo[0].speed + Server.floorsInfo[0].phase) % (2 * Math.PI);
		var b = 2 * Math.PI + 2 * Math.PI - a;
		var c = (b - Server.floorsInfo[0].phase) / Server.floorsInfo[0].speed;
		// var d = c - (Server.getTime() * 0.001);
		var delay = c * 1000;
		// var cos = Math.cos((Server.getTime() * 0.001 + c) * Server.floorsInfo[0].speed + Server.floorsInfo[0].phase)

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
				
				console.log("HACK :: tap (" + (i+1) + ")");
				tapTimes[i] = 0;
				break;
			}
		}
		setTimeout(updateTimer, 10);
	}
})();
