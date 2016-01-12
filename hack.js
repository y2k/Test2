(function() {

	var _console = console;
	console = {
		function log(message) {
			_console.log("ROUTE: " + message);
		}	
	}

})();
