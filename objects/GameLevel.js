function GameLevel(level)
{
	this.at = Game.Screen.getScale() * -2/*-(2 + 19.2)*/;
	
	this.speed = 5;
	this.speedup = 0;
	
	this.events = level.events.slice();
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
		if(this.at >= this.events[0].at * Game.Screen.getScale())
		{
			var event = this.events.shift();
			
			if(event.type == "spawn")
			{
				if(event.data.model)
				{
					new RebelCruiser(event.data.position * Game.Screen.getScale());
				}
			}
		}
	}
	else
	{
		if(Objedex.RebelCruisers.size() == 0)
		{
			console.log("you win!");
			
			var level = Levelqueue.get();
			
			if(level)
			{
				Game.Level = new GameLevel(level);
			}
			else
			{
				Game.State.load("not playing");
			}
		}
	}
	
	var at = Math.floor(this.at / Game.Screen.getScale());
	$("#debug").text(at);
}