var me = new Starship27();

Gameloop.func = function()
{
	update(me);
	render(me);
}

function update(stuff)
{
	if(stuff.update)
	{
		stuff.update();
	}
	else
	{
		for(var s in stuff)
		{
			if(stuff[s].update)
			{
				stuff[s].update();
			}
		}
	}
}

function render(stuff)
{
	if(stuff.render)
	{
		var rendering = stuff.render();
		$("canvas").draw(rendering);
	}
	else
	{
		for(var s in stuff)
		{
			if(stuff[s].render)
			{
				render(stuff[s]);
			}
		}
	}
}