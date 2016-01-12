(function() {
	var screen = document.getElementById("screen");
	var lastDelay = 0;
	var tapGame = function(delay) {
		lastDelay += delay;
		setTimeout(function() {
			var clickEvent = document.createEvent("MouseEvents");
			clickEvent.initEvent("click", true, true);
			screen.dispatchEvent(clickEvent);
			
			console.log("HACK :: tap on screen | " + Server.getTime() + " | " + (new Date().getTime() % 100000));
		}, lastDelay);
	}

	Analytics.roundReplay = function() {
		var dt = new Date().getTime() - Server.getTime();
		console.log("HACK :: dT = " + dt + " | floors = " + JSON.stringify(Server.floorsInfo[0]));
		lastDelay = -dt;

		tapGame(1000);
		tapGame(500);
		tapGame(500);
		tapGame(500);
		tapGame(500);
		tapGame(500);
	}
})();
