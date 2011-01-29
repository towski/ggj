private var darkOrbPrefab;
private var darkOrbRate;

function Start ()
{
	// calls gm for initial variables
	// get gm reference
	gm = GameObject.FindWithTag("gameManager").GetComponent("GameManager");
	darkOrbPrefab = gm.darkOrbPrefab;
	darkOrbRate = gm.darkOrbRate;
}