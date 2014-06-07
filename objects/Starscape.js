function Starscape(amount)
{
	for(var i = 0; i < amount; i++)
	{
		new Star(i % PARALLAX + 1);
	}
}