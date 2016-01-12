(function() {
	var screen = document.getElementById("screen_container");
	var lastDelay = 0;
	var tapGame = function(delay) {
		console.log("HACK :: tapGame()");
		
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
		
		tapGame(2000);
		tapGame(500);
	}
})();
