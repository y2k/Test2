(function() {
	Analytics.roundReplay = function() {
		console.log("HACK :: Analytics.roundReplay");
		
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

		tapGame(2000);
		tapGame(500);
	}
})();
