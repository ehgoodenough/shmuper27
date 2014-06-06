var Starship27 = function(position, color)
{
	this.objid = Starship27.generateObjid();
	Objedex.starship27s[this.objid] = this;
	
	this.color = color || "#EEE";
	this.position = position || {x: 0, y: 0};
	
	var scale = Gamescreen.getScale();
	
	this.width = scale * 3;
	this.height = scale * 2;
	this.speed = scale * 0.125;
	
	//this.guns = {};
	//this.shields = 1;
	
	this.controls = ControlSchemes[this.objid];
}

Starship27.objid = 0;

Starship27.generateObjid = function()
{
	return this.objid++;
}

Starship27.prototype.moveUp = function()
{
	var y = this.position.y - this.speed;
	if(y > 0) {this.position.y = y;}
}

Starship27.prototype.moveDown = function()
{
	var y = this.position.y + this.speed;
	if(y < Gamescreen.getHeight()) {this.position.y = y;}
}

Starship27.prototype.moveLeft = function()
{
	var x = this.position.x - this.speed;
	if(x > 0) {this.position.x = x;}
}

Starship27.prototype.moveRight = function()
{
	var x = this.position.x + this.speed;
	if(x < Gamescreen.getWidth()) {this.position.x = x;}
}

Starship27.prototype.getUpPosition = function()
{
	return this.position.y - (this.height / 2);
}

Starship27.prototype.getDownPosition = function()
{
	return this.position.y + (this.height / 2);
}

Starship27.prototype.getLeftPosition = function()
{
	return this.position.x - (this.width / 2);
}

Starship27.prototype.getRightPosition = function()
{
	return this.position.x + (this.width / 2);
}

Starship27.prototype.update = function()
{
	if(key.getState(this.controls["move right"]))
	{
		this.moveRight();
	}
	else if(key.getState(this.controls["move left"]))
	{
		this.moveLeft();
	}
	
	if(key.getState(this.controls["move down"]))
	{
		this.moveDown();
	}
	else if(key.getState(this.controls["move up"]))
	{
		this.moveUp();
	}
}

Starship27.prototype.render = function()
{
	var rendering = new Object();
	
	rendering.type = "rectangle";
	
	rendering.x = this.position.x;
	rendering.y = this.position.y;
	
	rendering.width = this.width;
	rendering.height = this.height;
	
	rendering.fillStyle = this.color;
	
	return rendering;
}

var ControlSchemes = 
[
	{
		"move up": "up arrow",
		"move down": "down arrow",
		"move left": "left arrow",
		"move right": "right arrow",
		"use weapon": "z"
	},
	{
		"move up": "i",
		"move down": "k",
		"move left": "j",
		"move right": "l",
		"use weapon": "g"
	}
]