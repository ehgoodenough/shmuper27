function GameLoop()
{
	this.reframe();
}

GameLoop.prototype.framerate = new function()
{
	this.delta = Date.now();
	
	this.preupdate = function()
	{
		this.delta = Date.now() - this.delta;
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
	Game.screen.dom.clearCanvas();
	if(Game.state)
	{
		Game.state.loop();
	}
	this.framerate.postupdate();
	
	this.reframe();
}

GameLoop.prototype.reframe = function()
{
	window.requestAnimationFrame(this.frame.bind(this));
}