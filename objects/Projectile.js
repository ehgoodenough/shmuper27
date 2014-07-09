function Projectile(position, direction, speed)
{
	Objedex.Projectiles.add(this);
	
	this.position = new Object()
	this.position.x = position.x;
	this.position.y = position.y;
	
	this.direction = direction;
	this.speed = speed;
	
	//this.radius?
	//this.affiliation?
}

Projectile.prototype.update = function()
{
	this.position.x += this.speed * Math.sin(this.direction);
	this.position.y += this.speed * Math.cos(this.direction);
	
	if(this.position.x > Game.screen.getWidth())
	{
		console.log("so long pard'ner");
		Objedex.Projectiles.remove(this);
	}
}

Projectile.prototype.render = function()
{
	var rendering = new Object();
	
	rendering.type = "arc";
	rendering.x = this.position.x;
	rendering.y = this.position.y;
	rendering.radius = Game.screen.getScale() / 5;
	rendering.fillStyle = "orange";
	
	return rendering;
}