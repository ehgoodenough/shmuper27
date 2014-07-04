function GameScreen(width, height, scale)
{
	this.width = width;
	this.height = height;
	this.scale = scale;
	
	$(document).ready(function()
	{
		this.dom = $("<canvas>");
		this.dom.attr("width", this.width);
		this.dom.attr("height", this.height);
		this.dom.appendTo("#game");
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

GameScreen.prototype.getScale = function()
{
	return this.scale;
}

GameScreen.prototype.getRandomX = function()
{
	return Math.floor(Math.random() * this.getWidth());
}

GameScreen.prototype.getRandomY = function()
{
	return Math.floor(Math.random() * this.getHeight());
}