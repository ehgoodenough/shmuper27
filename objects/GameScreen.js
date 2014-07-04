function GameScreen(width, height, scale)
{
	this.width = width || 1920;
	this.height = height || 1080;
	this.scale = scale || 200;
	
	$(document).ready(function()
	{
		this.dom = $("<canvas>");
		this.dom.attr("class", "view");
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