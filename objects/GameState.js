var funcs = {
	"playing": function()
	{
		if(!this.paused)
		{
			Game.Level.update();
			Objedex.Stars.update();
			Objedex.Shmuper27s.update();
			Objedex.RebelCruisers.update();
		}
		
		Objedex.Stars.render();
		Objedex.RebelCruisers.render();
		Objedex.Shmuper27s.render();
		
		while(key.hasEvent())
		{
			if(key.getEvent() == 90)
			{
				this.paused = !this.paused;
			}
		}
	},
	"not playing": function()
	{
		Objedex.Stars.render();
		
		while(key.hasEvent())
		{
			if(key.getEvent() == 90)
			{
				Game.State = new GameState("playing");
			}
		}
	}
}

function GameState(state)
{
	this.func = funcs[state];
}