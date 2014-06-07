new Shmuper27({x: GameScreen.getWidth() / 4, y: GameScreen.getHeight() / 2}, "maroon");
new GameLevel([{gx: 100, y: 100}, {gx: 200, y: 200}, {gx: 300, y: 400}, {gx: 400, y: 300}]);

GameLoop.func = function()
{
	Objedex.update("GameLevel");
	Objedex.update("Star");
	Objedex.update("Shmuper27");
	Objedex.update("RebelCruiser");
	
	Objedex.render("Star");
	Objedex.render("RebelCruiser");
	Objedex.render("Shmuper27");
}