function Gamelevel(filename)
{
	new Starscape(100);
	
	this.position = 0;
	
	this.events = [{position: 100}, {position: 200}, {position: 500}];
}

Gamelevel.prototype.update = function()
{
	$("#debug").text(this.position++);
	
	if(this.events[0])
	{
		if(this.position >= this.events[0].position)
		{
			var event = this.events.shift();
			new Rebelcruiser();
		}
	}
}