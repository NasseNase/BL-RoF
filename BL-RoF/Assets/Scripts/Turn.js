    #pragma strict
     
    private var oldMousePos : float;
    private var curMousePos : float;
    var old : float;
    var touch1 : float;
    var dual : boolean;
    var monkeyking : GameObject;

function Start () 
{
	monkeyking = GameObject.FindGameObjectWithTag("Monkeyking");
}
    function Update ()
    {
	    if (Input.touchCount == 1)
	    {
		    touch1 =Input.GetTouch(0).position.x;
		     
		    if (Input.GetTouch(0).phase == TouchPhase.Began )
			{
			    oldMousePos = (touch1/Screen.width);
			    old = 0;
		    }
		    if(Input.GetTouch(0).phase == TouchPhase.Moved )// This keeps running while finger is held down
		    {
		    	curMousePos = (touch1/Screen.width) - oldMousePos;
		     
			    if(!dual)
			    {
			    	monkeyking.transform.Rotate(0,((curMousePos-old)*20000)*Time.deltaTime ,0);
			    }
			     
				else{dual = false;}
				old = curMousePos;
		    }
		}
		if(Input.touchCount == 2 )
		{
		    dual = true;
	    }
    }