(function($)
{
	$.fn.drawStuff = function(stuff)
	{
		return this.each(function()
		{
			if(stuff.render)
			{
				$(this).draw(stuff.render());
			}
			else
			{
				for(var s in stuff)
				{
					if(stuff[s].render)
					{
						$(this).draw(stuff[s].render());
					}
				}
			}
		});
	}
}(jQuery));