new Shmuper27({x: Gamescreen.getWidth() / 4, y: Gamescreen.getHeight() / 2}, "maroon");
new Starscape(100, 4);

Gameloop.func = function()
{
	Objedex.update("Star");
	Objedex.update("Shmuper27");
	
	Objedex.render("Star");
	Objedex.render("Shmuper27");
}