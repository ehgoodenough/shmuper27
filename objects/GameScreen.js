function GameScreen()
{
	this.height = 17 * SCALE;
	this.width = this.height * 1.67;
	this.width = Math.round(this.width);
	this.height = Math.round(this.height);
	
	$(document).ready(function()
	{
		this.dom = $("<canvas>");
		this.dom.attr("width", this.getWidth());
		this.dom.attr("height", this.getHeight());
		this.dom.appendTo("body");
	}
	.bind(this));
}

GameScreen.prototype.getWidth = function()
{
	return this.width;
}

GameScreen.prototype.getHeight = function()
{
	return this.height;
}

GameScreen.prototype.getRandomX = function()
{
	return Math.floor(Math.random() * this.getWidth());
}

GameScreen.prototype.getRandomY = function()
{
	return Math.floor(Math.random() * this.getHeight());
}