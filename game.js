Game = new Object();
Game.Screen = new GameScreen(960, 540, 50);
Game.Level = new GameLevel(Levelqueue.get());
Game.State = new GameState("playing");
Game.Loop = new GameLoop();

for(var i = 0; i < 100; i++)
{
	new Star(i % Game.Level.getOriginalSpeed());
}