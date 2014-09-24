#pragma strict
var native_width : float = 1920;
var native_height : float = 1080;
var monkeyking : GameObject;
var originalWidth = 1366.0;  // define here the original resolution
var originalHeight = 768.0; // you used to create the GUI contents 
private var scale: Vector3;

function Start () {
	monkeyking = GameObject.FindGameObjectWithTag("Monkeyking");
}

function Update () {

}

function OnGUI ()
{
	scale.y = Screen.height/originalHeight; // calculate vert scale
	scale.x = scale.y; // this will keep your ratio base on Vertical scale
	scale.z = 1;
	var scaleX : float = Screen.width/originalWidth; // store this for translate
	var svMat : Matrix4x4 = GUI.matrix; // save current matrix // substitute matrix - only scale is altered from standard
	GUI.matrix = Matrix4x4.TRS(new Vector3( (scaleX - scale.y) / 2 * originalWidth, 0, 0), Quaternion.identity, scale);

	if (GUI.Button(Rect(originalWidth/2 - 183, originalHeight/2 +215, 90, 50), "Move")) {monkeyking.transform.animation.Play("Move");}
	if (GUI.Button(Rect(originalWidth/2 - 91, originalHeight/2 +215, 90, 50), "Attack")) {monkeyking.transform.animation["Attack1"].speed = 2; monkeyking.transform.animation.Play("Attack1");}
	if (GUI.Button(Rect(originalWidth/2 + 1, originalHeight/2 +215, 90, 50), "Death")) {monkeyking.transform.animation.Play("Death");}
	if (GUI.Button(Rect(originalWidth/2 + 93, originalHeight/2 +215, 90, 50), "Idle")) {monkeyking.transform.animation.Play("Default Take0");}

	if (GUI.Button(Rect(originalWidth/2 - 525, originalHeight/2 + 275, 150, 80), "Back")) {Application.LoadLevel(0); Menu.play_menu = true; Menu.start_menu = false; Menu.comeback = true;}
	
	// restore matrix before returning
    GUI.matrix = svMat; // restore matrix
}