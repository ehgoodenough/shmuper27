function GameLoop(func)
{
	this.func = func;
	this.reframe();
}

GameLoop.prototype.framerate = new function()
{
	//The delta is the time between frames, the
	//sigma is the sum of all deltas, and the
	//theta is the count of all deltas. We use
	//this information to analyze the framerate.
	
	this.delta = Date.now();
	this.sigma = Date.now();
	this.theta = 0;
	
	this.preupdate = function()
	{
		this.delta = Date.now() - this.delta;
		this.sigma += this.delta;
		this.theta++;
	}
	
	this.postupdate = function()
	{
		this.delta = Date.now();
	}
	
	this.getCurrent = function()
	{
		var current = this.delta;
		return current.toFixed(2);
	}
	
	this.getAverage = function()
	{
		var average = this.sigma / this.theta;
		return average.toFixed(2);
	}
}

GameLoop.prototype.frame = function()
{
	this.framerate.preupdate();
	Game.Screen.dom.clearCanvas();
	if(this.func) {this.func();}
	this.framerate.postupdate();
	
	this.reframe();
}

GameLoop.prototype.reframe = function()
{
	window.requestAnimationFrame(this.frame.bind(this));
}