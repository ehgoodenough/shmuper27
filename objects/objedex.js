var Objedex = new function()
{
	this.starship27s = new Object();
	
	this.update = function(stuff)
	{
		if(typeof stuff == "string")
			stuff = this[stuff];
		if(stuff)
			if(stuff.update)
				stuff.update();
			else
				for(var s in stuff)
					if(stuff[s].update)
						stuff[s].update();
	}
	
	this.render = function(stuff)
	{
		if(typeof stuff == "string")
			stuff = this[stuff];
		if(stuff)
			if(stuff.render)
				$("canvas").draw(stuff.render());
			else
				for(var s in stuff)
					if(stuff[s].render)
						this.render(stuff[s]);
	}
}