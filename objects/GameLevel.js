function GameLevel(level)
{
	this.at = Game.Screen.getScale() * -2/*-(2 + 19.2)*/;
	
	this.speed = 4;
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
		console.log("you win!");
		
		var level = Levelqueue.get();
		
		if(level)
		{
			Game.Level = new GameLevel(level);
		}
		else
		{
			Levelqueue.index = 1;
			//also reset the player?
			Game.State = new GameState("not playing");
		}
	}
	
	var at = Math.floor(this.at / Game.Screen.getScale());
	$("#debug").text(at);
}