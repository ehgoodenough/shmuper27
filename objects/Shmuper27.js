function Shmuper27(position, color)
{
	Objedex.Shmuper27s.add(this);
	
	this.speed = 8;
	this.width = Game.Screen.getScale() * 2;
	this.height = Game.Screen.getScale() + 33;
	this.position = position || {x: 0, y: 0};
	
	this.color = color || "#EEE";
	this.model = Shmuper27.getModel();
	
	this.controlScheme = Shmuper27.getControlScheme(this.objid);
}

Shmuper27.prototype.getUpPosition = function() {return this.position.y - (this.height / 2);}
Shmuper27.prototype.getDownPosition = function() {return this.position.y + (this.height / 2);}
Shmuper27.prototype.getLeftPosition = function() {return this.position.x - (this.width / 2);}
Shmuper27.prototype.getRightPosition = function() {return this.position.x + (this.width / 2);}

Shmuper27.prototype.getWidth = function() {return this.width;}
Shmuper27.prototype.getHeight = function() {return this.height;}
Shmuper27.prototype.getHalfWidth = function() {return this.width / 2;}
Shmuper27.prototype.getHalfHeight = function() {return this.height / 2;}

Shmuper27.prototype.moveUp = function()
{
	var y = this.position.y - this.speed;
	if(y > 0) {this.position.y = y;}
	else {this.position.y = 0;}
}

Shmuper27.prototype.moveDown = function()
{
	var y = this.position.y + this.speed;
	if(y < Game.Screen.getHeight()) {this.position.y = y;}
	else {this.position.y = Game.Screen.getHeight();}
}

Shmuper27.prototype.moveLeft = function()
{
	var x = this.position.x - this.speed;
	if(x > 0) {this.position.x = x;}
	else {this.position.x = 0;}
}

Shmuper27.prototype.moveRight = function()
{
	var x = this.position.x + this.speed;
	if(x < Game.Screen.getWidth()) {this.position.x = x;}
	else {this.position.x = Game.Screen.getWidth();}
}

Shmuper27.prototype.update = function()
{
	if(key.getState(this.controlScheme["move right"])) {this.moveRight();}
	else if(key.getState(this.controlScheme["move left"])) {this.moveLeft();}
	
	if(key.getState(this.controlScheme["move down"])) {this.moveDown();}
	else if(key.getState(this.controlScheme["move up"])) {this.moveUp();}
}

Shmuper27.prototype.render = function()
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

Shmuper27.getModel = function()
{
	return "SH#27";
}

Shmuper27.getControlScheme = function(objid)
{
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
	];
	
	return ControlSchemes[objid];
}