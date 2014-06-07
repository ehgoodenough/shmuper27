var Gamescreen = new function()
{
	this.scale = 64;
	
	this.height = 17 * this.scale;
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
	
	this.getScale = function()
	{
		return this.scale;
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