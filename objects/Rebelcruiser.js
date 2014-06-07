function Rebelcruiser(y)
{
	Objedex.add(this);
	
	this.width = SCALE * 3;
	this.height = SCALE * 2;
	this.speed = SCALE * 0.0625;
	
	this.color = "#EEE";
	
	this.position = new Object();
	this.position.y = y || Gamescreen.getRandomY();
	this.position.x = Gamescreen.getWidth() + this.getHalfWidth();
	
	this.model = Rebelcruiser.getModel();
	
	this.controls = Rebelcruiser.getControlPattern("do not move");
}

Rebelcruiser.prototype.getUpPosition = function()
{
	return this.position.y - (this.height / 2);
}

Rebelcruiser.prototype.getDownPosition = function()
{
	return this.position.y + (this.height / 2);
}

Rebelcruiser.prototype.getLeftPosition = function()
{
	return this.position.x - (this.width / 2);
}

Rebelcruiser.prototype.getRightPosition = function()
{
	return this.position.x + (this.width / 2);
}

Rebelcruiser.prototype.getWidth = function()
{
	return this.width;
}

Rebelcruiser.prototype.getHeight = function()
{
	return this.height;
}

Rebelcruiser.prototype.getHalfWidth = function()
{
	return this.width / 2;
}

Rebelcruiser.prototype.getHalfHeight = function()
{
	return this.height / 2;
}

Rebelcruiser.prototype.update = function()
{
	this.controls();
	
	if(this.position.x <= 0 - this.getHalfWidth())
	{
		Objedex.remove(this);
	}
}

Rebelcruiser.prototype.render = function()
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

Rebelcruiser.getModel = function()
{
	return "RC-" + (Math.floor(Math.random() * 90000) + 10000);
}

Rebelcruiser.getControlPattern = function(type)
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