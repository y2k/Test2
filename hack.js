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
		console.log("HACK :: dT = " + (new Date().getTime() - Server.getTime()) + " | floors = " + JSON.stringify(Server.floorsInfo[0]));
		lastDelay = Server.getTime() - new Date().getTime();

		tapGame(1000);
		tapGame(500);
		tapGame(500);
		tapGame(700);
		tapGame(200);
		tapGame(200);
	}
})();
