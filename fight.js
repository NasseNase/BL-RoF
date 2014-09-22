
// Start in landscape mode
	function Start () {
		Screen.orientation = ScreenOrientation.LandscapeLeft;
	}
	
	
	
	function OnGUI () {
	
	

	if (GUI.Button (Rect (0,Screen.height - 50,100,50), "Skill 1")) {
		skill1();
		
	}
	
	if (GUI.Button (Rect (150,Screen.height - 50,100,50), "Skill 2")) {
		skill2();
	}
	// Make the second button.
	if (GUI.Button (Rect (300,Screen.height - 50,100,50), "Skill 3")) {
		skill3();
	}
	
	if (GUI.Button (Rect (450,Screen.height - 50,100,50), "Skill 4")) {
		skill4();
	}
	if (GUI.Button (Rect (Screen.width-100,Screen.height - 50,100,50), "back")) {
		Application.LoadLevel("start");
	}
}


//skills
function skill1(){
var se = GameObject.Find("Affenkönig_TauntAnimation");
se.SendMessage ("do1");

}

function skill2(){
var sen = GameObject.Find("Affenkönig_Jump-Kick");
sen.SendMessage ("do2");
}

function skill3(){

}

function skill4(){

}