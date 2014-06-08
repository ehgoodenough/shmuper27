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
