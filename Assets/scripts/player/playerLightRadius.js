// get light radius from player light, use for things
function Start()
{
	// set radius from player light range
	var newRange = GameObject.FindWithTag("torchLight").GetComponent("Light").range;
	gameObject.collider.radius = newRange; 
}
