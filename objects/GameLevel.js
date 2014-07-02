function GameLevel(level)
{
	this.at = 200 * -5 * 0;
	
	this.speed = 4;
	this.speedup = 0;
	
	for(var i = 0; i < level.background.stars; i++)
	{
		new Star(i % this.speed);
	}
	
	this.events = level.events;
}

GameLevel.prototype.getCurrentSpeed = function()
{
	return this.speed + this.speedup;
}

GameLevel.prototype.getOriginalSpeed = function()
{
	return this.speed;
}

GameLevel.prototype.update = function()
{
	this.at += this.getCurrentSpeed()
	
	if(this.events.length > 0)
	{
		if(this.at >= this.events[0].at)
		{
			var event = this.events.shift();
			
			if(event.type == "spawn")
			{
				if(event.data.model)
				{
					new RebelCruiser(event.data.position);
				}
			}
			else if(event.type == "win")
			{
				this.speedup = 1;
				Game.State = 2;
			}
		}
	}
	
	$("#debug").text(this.at / 200);
}