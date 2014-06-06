var Objedex = new function()
{
	this.objects = new Object();
	
	this.add = function(stuff)
	{
		//This function assumes that the parameter
		//is an object that has reserved objid to
		//be assigned and was constructed with
		//a non-anonymous function.
		
		var protostuff = Object.getPrototypeOf(stuff);
		var classname = protostuff.constructor.name;
		
		if(!protostuff.objid)
			protostuff.objid = 0;
		stuff.objid = protostuff.objid++;
		
		if(!this.objects[classname])
			this.objects[classname] = new Object();
		this.objects[classname][stuff.objid] = stuff;
	}
	
	this.update = function(stuff)
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
	}
}