function Projectile(position, direction, speed, affiliation, radius)
{
	Objedex.Projectiles.add(this);
	
	this.position = new Object()
	this.position.x = position.x;
	this.position.y = position.y;
	
	this.speed = speed;
	this.shielding = 10;
	this.direction = direction;
	this.affiliation = affiliation;
	this.radius = radius || Game.screen.getScale() / 5;
}

Projectile.prototype.isOverlapping = function(that)
{
	var x = this.position.x - that.position.x;
	var y = this.position.y - that.position.y;
	var currentDistance = Math.sqrt(x * x + y * y);
	
	var collisionDistance = this.radius + that.radius;
	collisionDistance -= Game.screen.getScale() / 8;
	
	return currentDistance <= collisionDistance;
}

Projectile.prototype.damageShielding = function(damage)
{
	this.shielding -= damage;
	
	if(this.shielding <= 0)
	{
		this.explode();
	}
}

Projectile.prototype.explode = function()
{
	Objedex.Projectiles.remove(this);
}

Projectile.prototype.update = function()
{
	this.position.x += this.speed * Math.sin(this.direction);
	this.position.y += this.speed * Math.cos(this.direction);
	
	if(this.position.x < 0 - this.radius
	|| this.position.y < 0 - this.radius
	|| this.position.x > Game.screen.getWidth() + this.radius
	|| this.position.y > Game.screen.getHeight() + this.radius)
	{
		Objedex.Projectiles.remove(this);
	}
	
	var opposition = Objedex.RebelCruisers;
	if(this.affiliation == "RebelCruisers")
	{opposition = Objedex.Shmuper27s;}
	
	opposition.foreach(function(that)
	{
		if(this.isOverlapping(that))
		{
			this.damageShielding(10);
			that.damageShielding(10);
		}
	}
	.bind(this));
}

Projectile.prototype.render = function()
{
	var rendering = new Object();
	
	rendering.type = "arc";
	rendering.x = this.position.x;
	rendering.y = this.position.y;
	rendering.radius = this.radius;
	rendering.fillStyle = "orange";
	
	return rendering;
}