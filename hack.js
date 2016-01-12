(function() {

	var _console = console;
	var console = {};
	console.log = function(message){
			_console.log("ROUTE: " + message);
	}

})();
