function Starscape(total, depths)
{
	for(var i = 0; i < total; i++)
	{
		new Star(i % depths + 1);
	}
}