(function() {
	
	if(window.console && console.log){
	var old = console.log;
	console.log = function() {
		Array.prototype.unshift.call(arguments, 'Report: ');
		old.apply(this, arguments)
	}

	// var _console = window.console;
	// var console = {};
	// console.log = function(message){
	// 		// _console.log("ROUTE: " + message);
	// }
	// window.console = console;

})();
