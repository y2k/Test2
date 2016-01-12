(function() {
	var canvas = document.getElementById("screen");
	var lastDelay = 0;
	var tapGame = function(delay) {
		lastDelay += delay;
		setTimeout(function() {
			var clickEvent = document.createEvent("MouseEvents");
			clickEvent.initEvent("click", true, true);
			canvas.dispatchEvent(clickEvent);
		}, lastDelay);
	}

	Analytics.roundReplay = function() {
		console.log("HACK :: Analytics.roundReplay");
		
		tapGame(2000);
		tapGame(500);
	}
})();
