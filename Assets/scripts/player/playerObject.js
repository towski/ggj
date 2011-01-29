private var id = "player";
private var life;

// twigs collected from the world
var twigs = 0;

// game manager reference
private var gm;
// vars provided by gm
private var treeChopTime;
private var lightHitCost;
private var moveSpeed;

// player's torch light reference
private var tl;


function Start()
{
	// get gm reference
	gm = GameObject.FindWithTag("gameManager").GetComponent("gameManager");
	// set gm-based vars
	life = gm.playerLife;
	treeChopTime = gm.treeChopTime;
	lightHitCost = gm.darkOrbPlayerLightDamage;
	moveSpeed = gm.moveSpeed;
	
	// make torch light reference (*good thing I have my dog)
	tl = GameObject.FindWithTag("torchLight").GetComponent("Light");
}


function OrbAttack()
{
	// just got hit by an orb, do light damage, or life damage if light == 0
	// if we hit a player, check what light is at, do light damage
	if (tl.intensity > 0)
	{
		tl.intensity -= lightHitCost;
	}
	else
	{
		// if no light, do life damage
		life =- 1;
		
		// check if dead
		if (life <= 0)
		{
			KillPlayer();
		}
	}
}

function OnControllerColliderHit (hitObj)
{
	// if collide with object and action button is down
	if (Input.GetButtonDown("Action") && hitObj.interactable)
	{
		// do whatever the hit object's interact function has defined
		hitObj.Interact();
	}
}

function AddTwigs(amount)
{
	twigs += amount;
}

function KillPlayer()
{
	// do game over stuff
	gm.GameOver();
}
