// how many twigs do we get from the tree?
var twigAmount = 1;

// how long to chop down (animation time)
private var chopTime;

private var interactable = true;

function Start ()
{
	// get gm reference
	gm = GameObject.FindWithTag("gameManager").GetComponent("gameManager");
	// set gm-based vars
	chopTime = gm.treeChopTime;
}

function Interact()
{
	// get player
	var player = GameObject.FindWithTag("Player").GetComponent("playerObject");
	// add twigs to player
	player.AddTwigs(twigAmount);
}