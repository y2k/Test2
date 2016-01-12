(function() {

	var log = console.log;
	console.log = function(message) {
		log("ROUTE: " + message);
	}	

})();