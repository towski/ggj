// how many twigs do we get from the twig batch?
var twigAmount = 1;

function Interact()
{
	// get player
	var player = GameObject.FindWithTag("Player").GetComponent("playerObject");
	// add twigs to player
	player.AddTwigs(twigAmount);
}