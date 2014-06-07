new Starship27({x: Gamescreen.getWidth() / 4, y: Gamescreen.getHeight() / 2}, "maroon");
new Starscape(100, 4);

Gameloop.func = function()
{
	Objedex.update("Star");
	Objedex.update("Starship27");
	
	Objedex.render("Star");
	Objedex.render("Starship27");
}