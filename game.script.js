new Shmuper27({x: Gamescreen.getWidth() / 4, y: Gamescreen.getHeight() / 2}, "maroon");
new Gamelevel("tutorial.level");

Gameloop.func = function()
{
	Objedex.update("Star");
	Objedex.update("Shmuper27");
	Objedex.update("Rebelcruiser");
	
	Objedex.render("Star");
	Objedex.render("Rebelcruiser");
	Objedex.render("Shmuper27");
}