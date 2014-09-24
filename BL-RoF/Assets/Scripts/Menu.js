#pragma strict
var native_width : float = 1920;
var native_height : float = 1080;
public static var play_menu : boolean = false;
public static var start_menu : boolean = false;
var arena_menu : boolean = false;
public static var comeback : boolean = false;
var originalWidth = 1366.0;  // define here the original resolution
var originalHeight = 768.0; // you used to create the GUI contents 
private var scale: Vector3;

function Start () 
{
if (comeback == false)
	{
	start_menu = true;
	}
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


	
    //set up scaling
    //var rx : float = Screen.width / native_width *2;
    //var ry : float = Screen.height / native_height *2;
    if (start_menu == true)
    {
    	if (GUI.Button(Rect(originalWidth/2 - 200, originalHeight/2 - 250, 400, 150), "Play")) {play_menu = true; start_menu = false;}
		if (GUI.Button(Rect(originalWidth/2 - 200, originalHeight/2 - 75, 400, 150), "Options")) {Application.LoadLevel(2);}
		if (GUI.Button(Rect(originalWidth/2 - 200, originalHeight/2 + 100, 400, 150), "Exit")) {Application.Quit();}
		if (GUI.Button(Rect(originalWidth/2 + 450, originalHeight/2 + 225, 150, 80), "Shop")) {Application.Quit();}
    /*
    	if (GUI.Button(Rect(Screen.width/2 - 200, Screen.height/2 - 150, 400, 150), "Play")) {play_menu = true; start_menu = false;}
		if (GUI.Button(Rect(Screen.width/2 - 200, Screen.height/2 + 25, 400, 150), "Options")) {Application.LoadLevel(2);}
		if (GUI.Button(Rect(Screen.width/2 - 200, Screen.height/2 + 200, 400, 150), "Exit")) {Application.Quit();}
		if (GUI.Button(Rect(Screen.width/2 + 550, Screen.height/2 + 350, 100, 100), "Shop")) {Application.Quit();}
		*/
    }
    
	if (play_menu == true)
	{
	if (GUI.Button(Rect(originalWidth/2 - 250, originalHeight/2 -125, 500, 300), "Arena")) {play_menu = false; arena_menu = true;}
	if (GUI.Button(Rect(originalWidth/2 - 475, originalHeight/2 -125, 200, 300), "Character Customization")) {Application.LoadLevel(1);}
	if (GUI.Button(Rect(originalWidth/2 + 275, originalHeight/2 -125, 200, 300), "Practice")) {Application.LoadLevel(1);}
	
	if (GUI.Button(Rect(originalWidth/2 - 525, originalHeight/2 + 275, 150, 80), "Back")) {play_menu = false; start_menu = true;}
	
	/*
	if (GUI.Button(Rect(Screen.width/2 - 250, Screen.height/2 -75, 500, 300), "Arena")) {play_menu = false; arena_menu = true;}
	
	if (GUI.Button(Rect(Screen.width/2 - 475, Screen.height/2 -75, 200, 300), "Character Customization")) {Application.LoadLevel(1);}
	if (GUI.Button(Rect(Screen.width/2 + 275, Screen.height/2 -75, 200, 300), "Practice")) {Application.LoadLevel(1);}
	
	if (GUI.Button(Rect(Screen.width/2 - 650, Screen.height/2 + 400, 75, 50), "Back")) {play_menu = false; start_menu = true;}
	*/}
	
	if (arena_menu == true)
	{
		if (GUI.Button(Rect(originalWidth/2 - 475, originalHeight/2 -75, 300, 200), "Online")) {Application.LoadLevel(1);}
		if (GUI.Button(Rect(originalWidth/2 - 150, originalHeight/2 -75, 300, 200), "Bluetooth")) {Application.LoadLevel(1);}
		if (GUI.Button(Rect(originalWidth/2 + 175, originalHeight/2 -75, 300, 200), "Arcade")) {Application.LoadLevel(1);}
		if (GUI.Button(Rect(originalWidth/2 - 525, originalHeight/2 + 275, 150, 80), "Back")) {arena_menu = false; play_menu = true;}

	}
	
	
	// restore matrix before returning
    GUI.matrix = svMat; // restore matrix
	
	//if (GUI.Button(Rect(Screen.width/2 - 125, Screen.height/2 - 25, 250, 60), "Options")) {Application.LoadLevel(2);}
	//if (GUI.Button(Rect(Screen.width/2 - 125, Screen.height/2 + 50, 250, 60), "Exit")) {Application.Quit();}
	
			//GUI.Button(Rect(500, 500, 500, 100), Application.LoadLevel(1);
	
	//hplopValue = GUI.HorizontalSlider (Rect (150, 205, 400, 50), hplopValue, 10,100);
	//GUI.TextField (Rect (150, 180, 400, 25), plopString+""+hplopValue);

	
}