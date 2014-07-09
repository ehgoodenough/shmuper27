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
	this.shields = RebelCruiser.getShielding();
	
	this.controlPattern = RebelCruiser.getControlPattern("just do nothing");
}

RebelCruiser.prototype.getRadius = function() {return this.radius;}
RebelCruiser.prototype.getDiameter = function() {return this.radius * 2;}

RebelCruiser.prototype.damageShields = function(damage)
{
	this.shields -= damage;
	
	if(this.shields <= 0)
	{
		this.explode();
	}
}

RebelCruiser.prototype.explode = function()
{
	Objedex.RebelCruisers.remove(this);
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
		}
	}
	
	return ControlPatterns[type];
}