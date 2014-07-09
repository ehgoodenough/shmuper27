function RebelCruiser(y)
{
	Objedex.RebelCruisers.add(this);
	
	this.radius = Game.screen.getScale();
	//this.width = Game.screen.getScale() * 2;
	//this.height = Game.screen.getScale() * 1.33;
	
	this.position = new Object();
	this.position.y = y /*|| Game.screen.getRandomY()*/;
	this.position.x = Game.screen.getWidth() + this.getRadius();
	
	this.model = RebelCruiser.getModel();
	this.shielding = RebelCruiser.getShielding();
	
	this.cooldown = 100;
	
	this.controlPattern = RebelCruiser.getControlPattern("just do nothing but shoot");
}

RebelCruiser.prototype.getRadius = function() {return this.radius;}
RebelCruiser.prototype.getDiameter = function() {return this.radius * 2;}

RebelCruiser.prototype.damageShielding = function(damage)
{
	this.shielding -= damage;
	
	if(this.shielding <= 0)
	{
		this.explode();
	}
}

RebelCruiser.prototype.explode = function()
{
	Objedex.RebelCruisers.remove(this);
}

RebelCruiser.prototype.isOverlapping = function(that)
{
	var x = this.position.x - that.position.x;
	var y = this.position.y - that.position.y;
	var currentDistance = Math.sqrt(x * x + y * y)
	
	var collisionDistance = this.radius + that.radius;
	collisionDistance -= Game.screen.getScale() / 8;
	
	return currentDistance <= collisionDistance;
}

RebelCruiser.prototype.update = function()
{
	this.position.x -= Game.level.getCurrentSpeed();
	
	this.controlPattern();
	
	if(this.position.x <= 0 - this.radius)
	{
		Objedex.RebelCruisers.remove(this);
	}
}

RebelCruiser.prototype.render = function()
{
	var rendering = new Object();
	
	rendering.type = "arc";
	rendering.x = this.position.x;
	rendering.y = this.position.y;
	rendering.radius = this.radius;
	rendering.fillStyle = "gray";
	
	return rendering;
}

RebelCruiser.getModel = function()
{
	return "RC-" + (Math.floor(Math.random() * 90000) + 10000);
}

RebelCruiser.getShielding = function()
{
	return 50;
}

RebelCruiser.getControlPattern = function(type)
{
	var ControlPatterns =
	{
		"just do nothing": function()
		{
			//nothing!!
		},
		"just do nothing but shoot": function()
		{
			if(this.cooldown <= 0)
			{
				var speed = 10;
				var affiliation = "RebelCruisers";
				var direction = degrees2radians(270);
				new Projectile(this.position, direction, speed, affiliation);
				
				this.cooldown = 50;
			}
			else
			{
				this.cooldown--;
			}
		}
	}
	
	return ControlPatterns[type];
}