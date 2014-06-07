function Rebelcruiser(y)
{
	Objedex.add(this);
	
	this.width = SCALE * 3;
	this.height = SCALE * 2;
	this.speed = SCALE * 0.125;
	
	this.color = "#EEE";
	
	this.position = new Object();
	this.position.y = y || Gamescreen.getRandomY();
	this.position.x = Gamescreen.getWidth() + this.getHalfWidth();
	
	this.model = Rebelcruiser.getModel();
}

Rebelcruiser.getModel = function()
{
	return "RC-" + (Math.floor(Math.random() * 90000) + 10000);
}

Rebelcruiser.prototype.getWidth = function()
{
	return this.width;
}

Rebelcruiser.prototype.getHeight = function()
{
	return this.height;
}

Rebelcruiser.prototype.getHalfWidth = function()
{
	return this.width / 2;
}

Rebelcruiser.prototype.getHalfHeight = function()
{
	return this.height / 2;
}

Rebelcruiser.prototype.update = function()
{
	this.position.x--;
}

Rebelcruiser.prototype.render = function()
{
	var rendering = new Object();
	
	rendering.type = "rectangle";
	
	rendering.x = this.position.x;
	rendering.y = this.position.y;
	
	rendering.width = this.width;
	rendering.height = this.height;
	
	rendering.fillStyle = this.color;
	
	return rendering;
}