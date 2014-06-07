function GameLevel(events)
{
	Objedex.add(this);
	
	this.gx = 0;
	this.gspd = 1;
	
	GameLevel.generateStars(100);
	
	this.events = events;
}

GameLevel.prototype.update = function()
{
	this.gx += this.gspd;
	
	if(this.events.length > 0)
	{
		if(this.gx >= this.events[0].gx)
		{
			var event = this.events.shift();
			new RebelCruiser(event.y);
		}
	}
	
	$("#debug").text(this.gx);
}

GameLevel.generateStars = function(amount)
{
	for(var i = 0; i < amount; i++) {new Star(i % PARALLAX + 1);}
}