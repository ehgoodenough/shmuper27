function GameScreen()
{
	this.width = 1920;
	this.height = 1080;
	
	$(document).ready(function()
	{
		this.dom = $("<canvas>");
		this.dom.attr("width", this.width);
		this.dom.attr("height", this.height);
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