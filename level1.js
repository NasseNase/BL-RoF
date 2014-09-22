// Start in landscape mode
	function Start () {
		Screen.orientation = ScreenOrientation.LandscapeLeft;
	}
	

	
	// Rufe Charakterbild auf
function charakter(){
 Application.LoadLevel("fight");
 
 
}
	
// JavaScript
function OnGUI () {
	// Make a background box
	GUI.Box (new Rect (Screen.width - 100,Screen.height - 50,100,50), "");

	if (GUI.Button (Rect (Screen.width - 100,Screen.height - 150,100,50), "fight")) {
		charakter();
		
	}
	
	if (GUI.Button (Rect (Screen.width - 100,Screen.height - 100,100,50), "Back")) {
		Application.LoadLevel("start");
	}
	// Make the second button.
	if (GUI.Button (Rect (Screen.width - 100,Screen.height - 50,100,50), "Exit")) {
		Application.Quit();
	}
}


