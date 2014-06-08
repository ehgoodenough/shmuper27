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
Game.Level = new GameLevel([
	{gx: 100, y: 100},
	{gx: 300, y: 200},
	{gx: 600, y: 400},
	{gx: 800, y: 300}
]);



new Shmuper27({x: Game.Screen.getWidth() / 4, y: Game.Screen.getHeight() / 2}, "maroon");