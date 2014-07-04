function ObjedexEntry()
{
	this.objid = 0;
	this.stuff = {};
}

ObjedexEntry.prototype.add = function(stuff)
{
	var objid = this.objid++;
	this.stuff[objid] = stuff;
	stuff.objid = objid;
}

ObjedexEntry.prototype.remove = function(stuff)
{
	var objid = stuff.objid;
	delete this.stuff[objid];
}

ObjedexEntry.prototype.update = function(stuff)
{
	stuff = stuff || this.stuff;
	
	if(stuff.update)
	{
		stuff.update();
	}
	else
	{
		for(var s in stuff)
			if(stuff[s].update)
				this.update(stuff[s]);
	}
}

ObjedexEntry.prototype.render = function(stuff)
{
	stuff = stuff || this.stuff;
	
	if(stuff.render)
	{
		var rendering = stuff.render();
		$("canvas").draw(rendering);
	}
	else
	{
		for(var s in stuff)
			if(stuff[s].render)
				this.render(stuff[s]);
	}
}

ObjedexEntry.prototype.reset = function()
{
	console.log("RESET");
	this.objid = 0;
	this.stuff = {};
}

ObjedexEntry.prototype.size = function()
{
	return Object.keys(this.stuff).length;
}



var Objedex = new function()
{
	this.Stars = new ObjedexEntry();
	this.Shmuper27s = new ObjedexEntry();
	this.RebelCruisers = new ObjedexEntry();
}