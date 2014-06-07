function ObjedexEntry()
{
	var collection = new Object();
}

ObjedexEntry.prototype.update = function(stuff)
{
	if(stuff.update)
		stuff.update();
	else
		for(var s in stuff)
			if(stuff[s].update)
				stuff[s].update();
}

ObjedexEntry.prototype.render = function(stuff)
{
	if(stuff.render)
		$("canvas").draw(stuff.render());
	else
		for(var s in stuff)
			if(stuff[s].render)
				this.render(stuff[s]);
}

ObjedexEntry.prototype.add = function(stuff)
{
	var protostuff = Object.getPrototypeOf(stuff);
	if(!protostuff.objid) {protostuff.objid = 0;}
	stuff.objid = protostuff.objid++;
	this.collection[stuff.objid] = stuff;
}

ObjedexEntry.prototype.remove = function(stuff)
{
	delete this.collection[stuff.objid];
}