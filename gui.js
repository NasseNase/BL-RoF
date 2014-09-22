
// Start in landscape mode
	function Start () {
		Screen.orientation = ScreenOrientation.LandscapeLeft;
	}


// JavaScript
function OnGUI () {
	// Make a background box
	GUI.Box (Rect (Screen.width,Screen.height,100,90), "Menu");

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (Screen.width/2-80,Screen.height/2-20,160,40), "Start")) {
		Application.LoadLevel ("Level1");
	}

	// Make the second button.
	if (GUI.Button (Rect (Screen.width/2-80,Screen.height/2+40,160,40), "Exit")) {
		Application.Quit();
	}
}
