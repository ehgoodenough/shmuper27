var SCALE = 64;

var Game = new Object();
Game.Screen = new GameScreen();
Game.Level = new GameLevel(level01);
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

new Shmuper27({x: Game.Screen.getWidth() / 4, y: Game.Screen.getHeight() / 2}, "maroon");
	
for(var i = 0; i < 100; i++)
{
	new Star(i % Game.Level.getOriginalSpeed());
}