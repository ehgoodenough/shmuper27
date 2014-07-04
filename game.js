Game = new Object();
Game.State = new GameState("not playing");
Game.Screen = new GameScreen(1920, 1080, 100);
Game.Level = new GameLevel(Levelqueue.get());
Game.Loop = new GameLoop();

for(var i = 0; i < 100; i++) {new Star(i % Game.Level.getOriginalSpeed());}