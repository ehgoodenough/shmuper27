var SCALE = 64;

var Game = new Object();
Game.State = 1;
Game.Screen = new GameScreen();
Game.Level = new GameLevel(level01);
Game.Loop = new GameLoop(function()
{
	if(Game.State == 1)
	{
		Game.Level.update();
		
		Objedex.Stars.update();
		Objedex.Shmuper27s.update();
		Objedex.RebelCruisers.update();
		
		Objedex.Stars.render();
		Objedex.RebelCruisers.render();
		Objedex.Shmuper27s.render();
	}
	else if(Game.State == 2)
	{
		Objedex.Stars.update();
		Objedex.Shmuper27s.update();
		Objedex.RebelCruisers.update();
		
		Game.Level.speedup *= 1.01;
		if(Game.Level.speedup > 50)
		{
			Game.Level.speedup = 50;
		}
		
		Objedex.Stars.render();
		Objedex.RebelCruisers.render();
		Objedex.Shmuper27s.render();
	}
});

new Shmuper27({x: Game.Screen.getWidth() / 4, y: Game.Screen.getHeight() / 2}, "maroon");