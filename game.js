var Game = new function() {}
Game.screen = new GameScreen(960, 540, 50);
Game.level = new GameLevel(Levelqueue.get());
Game.state = new GameState("not playing");
Game.loop = new GameLoop();

for(var i = 0; i < 100; i++)
{
	new Star(i % Game.level.getOriginalSpeed());
}

$("#menu").ready(function()
{
	$(this).hide();
	
	$(this).find("a[href=singleplayer]").click(function(event)
	{
		event.preventDefault();
		Game.state.load("playing");
	});
});

$("#status").ready(function()
{
	$(this).css("display", "none");
});