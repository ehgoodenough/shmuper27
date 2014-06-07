function GameLevel(filename)
{
	this.gx = 0;
	
	GameLevel.generateStars(100);
	
	this.events = [{gx: 100, y: 100}, {gx: 200, y: 200}, {gx: 300, y: 400}, {gx: 400, y: 300}];
}

GameLevel.prototype.update = function()
{
	if(this.events.length > 0)
	{
		if(this.gx >= this.events[0].gx)
		{
			var event = this.events.shift();
			new RebelCruiser(event.y);
		}
	}
	
	$("#debug").text(this.gx++);
}

GameLevel.generateStars = function(amount)
{
	for(var i = 0; i < amount; i++) {new Star(i % PARALLAX + 1);}
}