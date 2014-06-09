var SCALE = 64;

var Game = new Object();
Game.Screen = new GameScreen();
Game.Loop = new GameLoop(function()
{
	Game.Level.update();
	
	Objedex.Stars.update();
	Objedex.Shmuper27s.update();
	Objedex.RebelCruisers.update();
	
	Objedex.Stars.render();
	Objedex.RebelCruisers.render();
	Objedex.Shmuper27s.render();
});

Game.Level = new GameLevel(level01);



new Shmuper27({x: Game.Screen.getWidth() / 4, y: Game.Screen.getHeight() / 2}, "maroon");