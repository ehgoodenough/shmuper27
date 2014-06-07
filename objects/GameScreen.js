var SCALE = 64;

var GameScreen = new function()
{
	this.height = 17 * SCALE;
	this.width = this.height * 1.67;
	this.width = Math.round(this.width);
	this.height = Math.round(this.height);
	
	this.getWidth = function()
	{
		return this.width;
	}
	
	this.getHeight = function()
	{
		return this.height;
	}
	
	this.getRandomX = function()
	{
		return Math.floor(Math.random() * this.getWidth());
	}
	
	this.getRandomY = function()
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