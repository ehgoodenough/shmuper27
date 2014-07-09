function Shmuper27()
{
	Objedex.Shmuper27s.add(this);
	
	this.position = new Object();
	this.position.x = Game.screen.getWidth() / 4;
	this.position.y = Game.screen.getHeight() / 2;
	
	this.radius = Game.screen.getScale();
	this.speed = Game.screen.getScale() / 10;
	
	this.model = Shmuper27.getModel();
	this.shielding = Shmuper27.getShielding();
	
	this.cooldown = 25;
	
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
	if(y < Game.screen.getHeight()) {this.position.y = y;}
	else {this.position.y = Game.screen.getHeight();}
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
	if(x < Game.screen.getWidth()) {this.position.x = x;}
	else {this.position.x = Game.screen.getWidth();}
}

Shmuper27.prototype.damageShielding = function(damage)
{
	this.shielding -= damage;
	
	if(this.shielding <= 0)
	{
		this.explode();
	}
}

Shmuper27.prototype.explode = function()
{
	Game.state.load("not playing");
}

Shmuper27.prototype.isOverlapping = function(that)
{
	var x = this.position.x - that.position.x;
	var y = this.position.y - that.position.y;
	var currentDistance = Math.sqrt(x * x + y * y)
	
	var collisionDistance = this.radius + that.radius;
	collisionDistance -= Game.screen.getScale() / 8;
	
	return currentDistance <= collisionDistance;
}

Shmuper27.prototype.getShielding = function()
{
	return this.shielding;
}

Shmuper27.prototype.getShieldingPercentage = function()
{
	return (this.getShielding() / Shmuper27.getShielding()).toFixed(2) + "%";
}

Shmuper27.prototype.update = function()
{
	if(key.getState(this.controlScheme["move right"])) {this.moveRight();}
	else if(key.getState(this.controlScheme["move left"])) {this.moveLeft();}
	
	if(key.getState(this.controlScheme["move down"])) {this.moveDown();}
	else if(key.getState(this.controlScheme["move up"])) {this.moveUp();}
	
	if(key.getState(this.controlScheme["use weapon"]))
	{
		if(this.cooldown <= 0)
		{
			this.cooldown = 8;
			
			var speed = this.speed * 2;
			var affiliation = "Shmuper27s";
			var direction = degrees2radians(90);
			new Projectile(this.position, direction, speed, affiliation);
		}
	}
	
	if(this.cooldown > 0)
	{
		this.cooldown--;
	}
	
	Objedex.RebelCruisers.foreach(function(that)
	{
		if(this.isOverlapping(that))
		{
			this.damageShielding(5);
			that.damageShielding(5);
			
			if(this.position.y < that.position.y)
			{
				this.position.y -= this.speed;
				that.position.y += this.speed;
			}
			else
			{
				this.position.y += this.speed;
				that.position.y -= this.speed;
			}
		}
	}
	.bind(this));
	
	$("#overhead-interface > #shielding > #value").text(this.getShieldingPercentage());
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

function degrees2radians(angle)
{
	return angle * (Math.PI / 180);
}