(function() {

	var _console = window.console;
	var console = {};
	console.log = function(message){
			_console.log("ROUTE: " + message);
	}
	window.console = console;

})();
