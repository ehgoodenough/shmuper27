function GameLevel(level)
{
	this.at = SCALE * -10;
	
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
		if(this.at >= this.events[0].at * SCALE)
		{
			var event = this.events.shift();
			
			if(event.type == "spawn")
			{
				if(event.data.model)
				{
					new RebelCruiser(event.data.position * SCALE);
				}
			}
		}
	}
	else
	{
		console.log("you win!");
		
		if(Game.LevelQueue.hasNextLevel())
		{
			Game.Level = Game.LevelQueue.getNextLevel();
		}
		else
		{
			//?!
		}
	}
	
	$("#debug").text(this.at / SCALE);
}

var GameLevelQueue = function(levels)
{
	this.levels = levels;
}

GameLevelQueue.prototype.hasNextLevel = function()
{
	return this.levels.length > 0;
}

GameLevelQueue.prototype.getNextLevel = function()
{
	var level = this.levels.shift();
	return new GameLevel(level);
}