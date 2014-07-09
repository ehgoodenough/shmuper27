function Shmuper27()
{
	Objedex.Shmuper27s.add(this);
	
	this.position = new Object();
	this.position.x = Game.Screen.getWidth() / 4;
	this.position.y = Game.Screen.getHeight() / 2;
	
	this.radius = Game.Screen.getScale();
	this.speed = Game.Screen.getScale() / 10;
	
	this.model = Shmuper27.getModel();
	this.shields = Shmuper27.getShielding();
	
	this.controlScheme = Shmuper27.getControlScheme(this.objid);
}

Shmuper27.prototype.getRadius = function() {return this.radius;}
Shmuper27.prototype.getDiameter = function() {return this.radius * 2;}

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

Shmuper27.prototype.damageShields = function(damage)
{
	this.shields -= damage;
	
	if(this.shields <= 0)
	{
		this.explode();
	}
}

Shmuper27.prototype.explode = function()
{
	Game.State.load("not playing");
}

Shmuper27.prototype.isOverlapping = function(that)
{
	var x = this.position.x - that.position.x;
	var y = this.position.y - that.position.y;
	var currentDistance = Math.sqrt(x * x + y * y)
	
	var collisionDistance = this.radius + that.radius;
	collisionDistance -= Game.Screen.getScale() / 8;
	
	return currentDistance <= collisionDistance;
}

Shmuper27.prototype.update = function()
{
	if(key.getState(this.controlScheme["move right"])) {this.moveRight();}
	else if(key.getState(this.controlScheme["move left"])) {this.moveLeft();}
	
	if(key.getState(this.controlScheme["move down"])) {this.moveDown();}
	else if(key.getState(this.controlScheme["move up"])) {this.moveUp();}
	
	Objedex.RebelCruisers.foreach(function(that)
	{
		if(this.isOverlapping(that))
		{
			this.damageShields(5);
			that.damageShields(5);
		}
	}
	.bind(this));
	
	/*if(collision)
	{
		this.color = "green"
	}
	else
	{
		this.color = undefined;
	}*/
	
	$("#debug").text(this.shields + "%");
}

Shmuper27.prototype.render = function()
{
	var rendering = new Object();
	
	rendering.type = "arc";
	rendering.x = this.position.x;
	rendering.y = this.position.y;
	rendering.radius = this.radius;
	rendering.fillStyle = this.color || "maroon";
	
	return rendering;
}

Shmuper27.getModel = function()
{
	return "SH#27";
}

Shmuper27.getShielding = function()
{
	return 100;
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