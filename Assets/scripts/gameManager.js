//how much life does the player have
var playerLife = 2;

// what light (life) do bonfires start with
var bonfireLight;

// how long does it take to chop down a tree
var treeChopTime;

// Dark orb related fields
var darkOrbPrefab : GameObject;
var darkOrbRate;
// how much does a dark orb reduce the player's light
var darkOrbPlayerLightDamage = .1;

// movement!
var moveSpeed = 3.0;

var GameOverText : GameObject;


function GameOver()
{
	Instantiate(GameOverText);
}