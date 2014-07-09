var states = {
	"playing": {
		loop: function()
		{
			if(!this.paused)
			{
				Game.level.update();
				Objedex.Stars.update();
				Objedex.Shmuper27s.update();
				Objedex.RebelCruisers.update();
				Objedex.Projectiles.update();
			}
			
			Objedex.Stars.render();
			Objedex.Projectiles.render();
			Objedex.RebelCruisers.render();
			Objedex.Shmuper27s.render();
			
			while(key.hasEvent())
			{
				if(key.getEvent() == 32)
				{
					this.paused = !this.paused;
				}
			}
		},
		start: function()
		{
			new Shmuper27();
			
			$("#overhead-interface").show();
		},
		end: function()
		{
			Levelqueue.reset();
			Objedex.Shmuper27s.reset();
			Objedex.Projectiles.reset();
			Objedex.RebelCruisers.reset();
			
			$("#overhead-interface").fadeOut();
		}
	},
	"not playing": {
		loop: function()
		{
			//Objedex.Stars.update();
			Objedex.Stars.render();
			
			while(key.hasEvent())
			{
				if(key.getEvent() == 32)
				{
					Game.state.load("playing");
				}
			}
		},
		start: function()
		{
			$("#title-screen").fadeIn();
		},
		end: function()
		{
			$("#title-screen").hide();
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