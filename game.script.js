new Shmuper27({x: GameScreen.getWidth() / 4, y: GameScreen.getHeight() / 2}, "maroon");
var level = new GameLevel("tutorial.level");

GameLoop.func = function()
{
	level.update();
	Objedex.update("Star");
	Objedex.update("Shmuper27");
	Objedex.update("RebelCruiser");
	
	Objedex.render("Star");
	Objedex.render("RebelCruiser");
	Objedex.render("Shmuper27");
}