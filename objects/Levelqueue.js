var Queue = function()
{
	this.stuff = [];
}

Queue.prototype.add = function(stuff)
{
	this.stuff.push(stuff);
}

Queue.prototype.hasNext = function()
{
	return this.stuff.length > 0;
}

Queue.prototype.getNext = function()
{
	return this.stuff.shift();
}

var Levelqueue = new Queue();