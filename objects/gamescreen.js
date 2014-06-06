var Gamescreen = new function()
{
	var DIMENSION = 17, SCALE = 64;
	this.height = Math.round(DIMENSION * SCALE);
	this.width = Math.round(this.height * 1.67);
	
	this.getWidth = function()
	{
		return this.width;
	}
	
	this.getHeight = function()
	{
		return this.height;
	}
	
	this.randomizeX = function()
	{
		return Math.floor(Math.random() * this.getWidth());
	}
	
	this.randomizeY = function()
	{
		return Math.floor(Math.random() * this.getHeight());
	}
	
	$(document).ready(function()
	{
		this.dom = $("<canvas>");
		this.dom.attr("width", this.getWidth());
		this.dom.attr("height", this.getHeight());
		this.dom.appendTo("body");
	}
	.bind(this));
}