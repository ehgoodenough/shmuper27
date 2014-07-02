function RebelCruiser(y)
{
	Objedex.RebelCruisers.add(this);
	
	this.width = Game.SCALE * 2;
	this.height = Game.SCALE + 33;
	
	this.color = "#EEE";
	this.model = RebelCruiser.getModel();
	
	this.position = new Object();
	this.position.y = y /*|| Game.Screen.getRandomY()*/;
	this.position.x = Game.Screen.getWidth() + this.getHalfWidth();
	
	this.controlPattern = RebelCruiser.getControlPattern("just do nothing");
}

RebelCruiser.prototype.getUpPosition = function() {return this.position.y - (this.height / 2);}
RebelCruiser.prototype.getDownPosition = function() {return this.position.y + (this.height / 2);}
RebelCruiser.prototype.getLeftPosition = function() {return this.position.x - (this.width / 2);}
RebelCruiser.prototype.getRightPosition = function() {return this.position.x + (this.width / 2);}

RebelCruiser.prototype.getWidth = function() {return this.width;}
RebelCruiser.prototype.getHeight = function() {return this.height;}
RebelCruiser.prototype.getHalfWidth = function() {return this.width / 2;}
RebelCruiser.prototype.getHalfHeight = function() {return this.height / 2;}

RebelCruiser.prototype.update = function()
{
	this.position.x -= Game.Level.getCurrentSpeed();
	
	this.controlPattern();
	
	if(this.position.x <= 0 - this.getHalfWidth())
	{
		Objedex.RebelCruisers.remove(this);
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
		"just do nothing": function()
		{
			//nothing!!
		}
	}
	
	return ControlPatterns[type];
}