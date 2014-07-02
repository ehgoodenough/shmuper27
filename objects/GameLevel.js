function GameLevel(level)
{
	this.at = Game.SCALE * -2/*-(2 + 19.2)*/;
	
	this.speed = 4;
	this.speedup = 0;
	
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
		if(this.at >= this.events[0].at * Game.SCALE)
		{
			var event = this.events.shift();
			
			if(event.type == "spawn")
			{
				if(event.data.model)
				{
					new RebelCruiser(event.data.position * Game.SCALE);
				}
			}
		}
	}
	else
	{
		console.log("you win!");
		
		if(Levelqueue.hasNext())
		{
			var level = Levelqueue.getNext();
			Game.Level = new GameLevel(level);
		}
		else
		{
			//?!
		}
	}
	
	$("#debug").text(this.at / Game.SCALE);
}