#pragma strict
var native_width : float = 1920;
var native_height : float = 1080;

function Start () {

}

function Update () {

}

function OnGUI ()
{
    //set up scaling
    //var rx : float = Screen.width / native_width *2;
    //var ry : float = Screen.height / native_height *2;
    //GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (rx, ry, 1)); 
	
	if (GUI.Button(Rect(Screen.width/2 - 125, Screen.height/2 -100, 250, 60), "Play")) {Application.LoadLevel(1);}
	if (GUI.Button(Rect(Screen.width/2 - 125, Screen.height/2 - 25, 250, 60), "Options")) {Application.LoadLevel(2);}
	if (GUI.Button(Rect(Screen.width/2 - 125, Screen.height/2 + 50, 250, 60), "Exit")) {Application.Quit();}
	
			//GUI.Button(Rect(500, 500, 500, 100), Application.LoadLevel(1);
	
	//hplopValue = GUI.HorizontalSlider (Rect (150, 205, 400, 50), hplopValue, 10,100);
	//GUI.TextField (Rect (150, 180, 400, 25), plopString+""+hplopValue);

	
}