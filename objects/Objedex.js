function ObjedexEntry()
{
	this.collection = new Object();
}

ObjedexEntry.prototype.update = function()
{
	var stuff = this.collection;
	
	for(var s in stuff)
		if(stuff[s].update)
			stuff[s].update();
}

ObjedexEntry.prototype.render = function(stuff)
{
	stuff = stuff || this.collection;
	
	if(stuff.render)
		$("canvas").draw(stuff.render()); //better syntax?
	else
		for(var s in stuff)
			if(stuff[s].render)
				this.render(stuff[s]);
}

ObjedexEntry.prototype.add = function(stuff)
{
	var protostuff = Object.getPrototypeOf(stuff);
	if(!protostuff.objid) {protostuff.objid = 0;}
	stuff.objid = protostuff.objid++; //move static objid to entry.
	
	this.collection[stuff.objid] = stuff;
}

ObjedexEntry.prototype.remove = function(stuff)
{
	delete this.collection[stuff.objid];
}

var Objedex = new function()
{
	this.Star = new ObjedexEntry();
	this.Shmuper27 = new ObjedexEntry();
	this.RebelCruiser = new ObjedexEntry();
	
	/*this.add = function(stuff)
	{
		//todo: do not allow classes named add, remove, reset
		//todo: allow any class names, regardless of anonymity?
		
		var protostuff = Object.getPrototypeOf(stuff);
		var classname = protostuff.constructor.name;
		
		if(!this[classname]) //=== undefined?
		{
			this[classname] = new ObjedexEntry();
		}
		
		this[classname].add(stuff);
	}
	
	this.remove = function(stuff)
	{
		var protostuff = Object.getPrototypeOf(stuff);
		var classname = protostuff.constructor.name;
		
		//if(this[classname])
			this[classname].remove(stuff);
	}*/
	
	/*this.update = function(stuff)
	{
		if(typeof stuff == "string")
			stuff = this.objects[stuff];
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
			stuff = this.objects[stuff];
		if(stuff)
			if(stuff.render)
				$("canvas").draw(stuff.render());
			else
				for(var s in stuff)
					if(stuff[s].render)
						this.render(stuff[s]);
	}*/
	
	/*this.reset = function()
	{
		this.objects = new Object(); //?! now invalid
	}*/
}