var Levelqueue = new function()
{
	this.levels = {};
	this.index = 1;
}

Levelqueue.add = function(index, level)
{
	this.levels[index] = level;
}

Levelqueue.get = function(index)
{
	index = index || this.index++;
	return this.levels[index];
}

Levelqueue.reset = function()
{
	this.index = 0;
}