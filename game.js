var Game = new function() {}
Game.screen = new GameScreen(960, 540, 50);
Game.level = new GameLevel(Levelqueue.get());
Game.state = new GameState("playing");
Game.loop = new GameLoop();

for(var i = 0; i < 100; i++)
{
	new Star(i % Game.level.getOriginalSpeed());
}