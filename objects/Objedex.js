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

ObjedexEntry.prototype.update = function(delta)
{
	delta = delta || 1;
	
	if(this.stuff.update)
	{
		this.stuff.update(delta);
	}
	else
	{
		for(var s in this.stuff)
			if(this.stuff[s].update)
				this.stuff[s].update(delta);
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
	this.objid = 0;
	this.stuff = {};
}

ObjedexEntry.prototype.size = function()
{
	return Object.keys(this.stuff).length;
}

ObjedexEntry.prototype.foreach = function(func)
{
	for(var s in this.stuff)
		func(this.stuff[s]);
}


var Objedex = new function()
{
	this.Stars = new ObjedexEntry();
	this.Shmuper27s = new ObjedexEntry();
	this.Projectiles = new ObjedexEntry();
	this.RebelCruisers = new ObjedexEntry();
}