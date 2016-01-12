(function() {
	var screen = document.getElementById("screen");
	var lastDelay = 0;
	var tapGame = function(delay) {
		lastDelay += delay;
		setTimeout(function() {
			var clickEvent = document.createEvent("MouseEvents");
			clickEvent.initEvent("click", true, true);
			screen.dispatchEvent(clickEvent);
			
			console.log("HACK :: tap on screen");
		}, lastDelay);
	}

	Analytics.roundReplay = function() {
		console.log("HACK :: Analytics.roundReplay");

		tapGame(500);
		tapGame(500);
		tapGame(500);
		tapGame(700);
		tapGame(200);
		tapGame(500);
	}
})();
