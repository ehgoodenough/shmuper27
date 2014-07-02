var level01 = 
{
	background:
	{
		stars: 100
	},
	events:
	[
		{
			at: 200 * 0,
			type: "spawn",
			data:
			{
				model: "RebelCruiser",
				position: 100
			}
		},
		{
			at: 200 * 1,
			type: "spawn",
			data:
			{
				model: "RebelCruiser",
				position: 200
			}
		},
		{
			at: 200 * 2,
			type: "spawn",
			data:
			{
				model: "RebelCruiser",
				position: 400
			}
		},
		{
			at: 200 * 3,
			type: "spawn",
			data:
			{
				model: "RebelCruiser",
				position: 300
			}
		},
		{
			at: 200 * 4,
			type: "win"
		}
	]
}