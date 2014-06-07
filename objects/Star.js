//In the background of the game are a handful
//of stars that suggest movement. It emulates
//parallax by moving the stars at a variety of
//different speeds depending on the "distance"
//from the player. After moving beyond the edge
//of the screen, the star is rerandomized again.

//When instantiating a star, the constructor
//requires a parallax value. Unlike the other
//attributes of the star, this value will not
//be rerandomized when the star moves beyond
//the edge of the screen. To use this object
//to the best effect, instantiate stars with
//a gradient of different parallax values.

//After it has been instantiated, the star
//will be automatically added to the objedex.

function Star(parallax)
{
	//Configure the parallax for
	//this star. If no parameter
	//was provided, then just
	//default to a value of two.
	this.parallax = parallax || 2;
	
	//Randomize the position of
	//the star across the screen.
	this.position = new Object();
	this.position.x = GameScreen.getRandomX();
	this.position.y = GameScreen.getRandomY();
	
	//Randomize the color of the star.
	this.color = Star.getRandomColor();
	
	//Add to the objedex!
	Objedex.add(this);
}

Star.prototype.update = function()
{
	//Move the star to the left, respecting
	//both parallax of the star as well the
	//speed of the starships all the while.
	this.position.x -= this.parallax + SPEEDUP;
	
	//If the star has moved completely
	//beyond the edge of the screen..
	if(this.position.x <= -4)
	{
		//..then rerandomize the attributes of
		//the star, including position and color.
		this.position.x = GameScreen.getWidth() + 4;
		this.position.y = GameScreen.getRandomY();
		this.color = Star.getRandomColor();
	}
}

Star.prototype.render = function()
{
	var rendering = new Object();
	
	rendering.type = "rectangle";
	
	rendering.x = this.position.x;
	rendering.y = this.position.y;
	
	rendering.width = this.parallax + SPEEDUP;
	rendering.height = this.parallax;
	
	rendering.fillStyle = this.color;
	
	return rendering;
}

Star.getRandomColor = function()
{
	var colors =
	[
		"#E42217", //Lava Red, RGB(228, 34, 23)
		"#E5E4E2", //Platinum, RGB(229, 228, 226)
		"#4863A0", //Steel Blue, RGB(72, 99, 160)
		"#98AFC7", //Blue Gray, RGB(152, 175, 199)
		"#728C00", //Venom Green, RGB(114, 140, 0)
		"#F87217", //Pumpkin Orange, RGB(248, 114, 23)
		"#6C2DC7", //Purple Amethyst, RGB(108, 45, 199)
		"#3EA99F", //Light Sea Green, RGB(62, 169, 159)
		"#FFD801", //Rubber Ducky Yellow, RGB(255, 216, 1)
	];
	
	return colors[Math.floor(Math.random() * colors.length)];
}

var SPEEDUP = 0; //todo: refactor this elsewhere!!
var PARALLAX = 4; //todo: also refactor this elsewhere!!