function GameLevel(events)
{
	Objedex.add(this);
	
	this.gx = 0;
	
	this.speed = 4;
	this.speedup = 0;
	
	var AMOUNT_OF_STARS = 100;
	for(var i = 0; i < AMOUNT_OF_STARS; i++)
	{
		//Objedex.stars.add(new Star(i % PARALLAX + 1));
		new Star(i % this.speed);
	}
	
	this.events = events;
}

GameLevel.prototype.getSpeed = function()
{
	return this.speed + this.speedup;
}

GameLevel.prototype.getOriginalSpeed = function()
{
	return this.speed;
}

GameLevel.prototype.update = function()
{
	this.gx += this.getSpeed();
	
	if(this.events.length > 0)
	{
		if(this.gx >= this.events[0].gx)
		{
			var event = this.events.shift();
			new RebelCruiser(event.y);
		}
	}
	
	$("#debug").text(this.gx);
}