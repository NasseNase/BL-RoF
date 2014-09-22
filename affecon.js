#pragma strict
 
function Start () {
 
}
 
function do1 () {
// Identify GameObject By name and change its animation with a key press.
 
//if (Input.GetKey ("up")){
 
var go = GameObject.Find("Affenkönig_TauntAnimation");
print ("do1 called");
go.animation.Play("Default Take", PlayMode.StopAll);
//}
 

 
}

function do2 () {
// Identify GameObject By name and change its animation with a key press.
 
//if (Input.GetKey ("up")){
 
var go2 = GameObject.Find("Affenkönig_Jump-Kick");
print ("do2 called");
go2.animation.Play("Default Take 1", PlayMode.StopAll);
//}
 

 
}