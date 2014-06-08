var Game = new function()
{
	//?!
}

new Shmuper27({x: GameScreen.getWidth() / 4, y: GameScreen.getHeight() / 2}, "maroon");
new GameLevel([{gx: 100, y: 100}, {gx: 200, y: 200}, {gx: 300, y: 400}, {gx: 400, y: 300}]);

GameLoop.func = function()
{
	Game.Level.update();
	
	Objedex.Star.update();
	Objedex.Shmuper27.update();
	Objedex.RebelCruiser.update();
	
	Objedex.Star.render();
	Objedex.RebelCruiser.render();
	Objedex.Shmuper27.render();
}