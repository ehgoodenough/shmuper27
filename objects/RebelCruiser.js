function RebelCruiser(y)
{
	Objedex.add(this);
	
	this.width = SCALE * 3;
	this.height = SCALE * 2;
	this.speed = SCALE * 0.0625;
	
	this.color = "#EEE";
	
	this.position = new Object();
	this.position.y = y || GameScreen.getRandomY();
	this.position.x = GameScreen.getWidth() + this.getHalfWidth();
	
	this.model = RebelCruiser.getModel();
	
	this.controls = RebelCruiser.getControlPattern("do not move");
}

RebelCruiser.prototype.getUpPosition = function()
{
	return this.position.y - (this.height / 2);
}

RebelCruiser.prototype.getDownPosition = function()
{
	return this.position.y + (this.height / 2);
}

RebelCruiser.prototype.getLeftPosition = function()
{
	return this.position.x - (this.width / 2);
}

RebelCruiser.prototype.getRightPosition = function()
{
	return this.position.x + (this.width / 2);
}

RebelCruiser.prototype.getWidth = function()
{
	return this.width;
}

RebelCruiser.prototype.getHeight = function()
{
	return this.height;
}

RebelCruiser.prototype.getHalfWidth = function()
{
	return this.width / 2;
}

RebelCruiser.prototype.getHalfHeight = function()
{
	return this.height / 2;
}

RebelCruiser.prototype.update = function()
{
	this.controls();
	
	if(this.position.x <= 0 - this.getHalfWidth())
	{
		Objedex.remove(this);
	}
}

RebelCruiser.prototype.render = function()
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

RebelCruiser.getModel = function()
{
	return "RC-" + (Math.floor(Math.random() * 90000) + 10000);
}

RebelCruiser.getControlPattern = function(type)
{
	var ControlPatterns =
	{
		"do not move": function()
		{
			this.position.x -= PARALLAX + SPEEDUP;
		}
	}
	
	return ControlPatterns[type];
}