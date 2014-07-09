var states = {
	"playing": {
		loop: function()
		{
			if(!this.paused)
			{
				Game.level.update();
				Objedex.Stars.update(1);
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
					if(this.paused)
					{
						$("#paused").hide();
						this.paused = false;
					}
					else
					{
						$("#paused").show();
						this.paused = true;
					}
				}
			}
		},
		start: function()
		{
			new Shmuper27();
			
			$("#status").show();
		},
		end: function()
		{
			Levelqueue.reset();
			Objedex.Shmuper27s.reset();
			Objedex.Projectiles.reset();
			Objedex.RebelCruisers.reset();
			
			$("#status").fadeOut();
		}
	},
	"not playing": {
		loop: function()
		{
			Objedex.Stars.update(0.25);
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
			$("#menu").fadeIn();
		},
		end: function()
		{
			$("#menu").hide();
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