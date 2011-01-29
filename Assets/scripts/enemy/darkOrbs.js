var darkOrbdeathRate;

// types of gameobject ids to hit
private var playerObject = "player";


function OnTriggerEnter(hitObj)
{
	if (hitObj.gameObject.tag == "Player")
	{
		hitObj.gameObject.playerObject.playerObject.orbAttack();
	}
}