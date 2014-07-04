var states = {
	"playing": {
		loop: function()
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
		start: function()
		{
			new Shmuper27({x: Game.Screen.getWidth() / 4, y: Game.Screen.getHeight() / 2}, "maroon");
		},
		end: function()
		{
			Levelqueue.index = 1;
			Objedex.Shmuper27s.reset();
		}
	},
	"not playing": {
		loop: function()
		{
			Objedex.Stars.render();
			
			while(key.hasEvent())
			{
				if(key.getEvent() == 90)
				{
					Game.State.load("playing");
				}
			}
		},
		start: function()
		{
		},
		end: function()
		{
		}
	}
}

function GameState(handle)
{
	this.state = states[handle];
	this.state.start();
	
	this.loop = this.state.loop;
	
	this.load = function(handle)
	{
		this.state.end();
		this.state = states[handle];
		this.loop = this.state.loop;
		this.state.start();
	}
}