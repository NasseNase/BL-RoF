﻿#pragma strict

public var perspectiveZoomSpeed : float = 0.2f;        // The rate of change of the field of view in perspective mode.
public var orthoZoomSpeed : float = 0.2f;        // The rate of change of the orthographic size in orthographic mode.


function Update()
{
    // If there are two touches on the device...
    if (Input.touchCount == 2)
    {
        // Store both touches.
        var touchZero = Input.GetTouch(0);
        var touchOne = Input.GetTouch(1);

        // Find the position in the previous frame of each touch.
        var touchZeroPrevPos = touchZero.position - touchZero.deltaPosition;
        var touchOnePrevPos = touchOne.position - touchOne.deltaPosition;

        // Find the magnitude of the vector (the distance) between the touches in each frame.
        var prevTouchDeltaMag = (touchZeroPrevPos - touchOnePrevPos).magnitude;
        var touchDeltaMag = (touchZero.position - touchOne.position).magnitude;

        // Find the difference in the distances between each frame.
        var deltaMagnitudeDiff = prevTouchDeltaMag - touchDeltaMag;

        // If the camera is orthographic...
        if (camera.isOrthoGraphic)
        {
            // ... change the orthographic size based on the change in distance between the touches.
            camera.orthographicSize += deltaMagnitudeDiff * orthoZoomSpeed;
            //_________________________________________________________________________
            
            if(camera.orthographicSize >=50f)
            {
            //stop zoom out
            camera.orthographicSize = 50f;
            
            }
            
             if(camera.orthographicSize <=20f)
            {
            //stop zoom in
            camera.orthographicSize = 20f;
            
            }
			//____________________________________________________________________
            // Make sure the orthographic size never drops below zero.
            camera.orthographicSize = Mathf.Max(camera.orthographicSize, 0.1f);
        }
        else
        {
            // Otherwise change the field of view based on the change in distance between the touches.
            camera.fieldOfView += deltaMagnitudeDiff * perspectiveZoomSpeed;
			
			//______________________________________________________________________________
			
			if(camera.fieldOfView >=50f)
            {
            //stop zoom out
            camera.fieldOfView = 50f;
            
            }
            
            if(camera.fieldOfView <=20f)
            {
            //stop zoom out
            camera.fieldOfView = 20f;
            
            }
			
			//______________________________________________________________________________
			
			
            // Clamp the field of view to make sure it's between 0 and 180.
            camera.fieldOfView = Mathf.Clamp(camera.fieldOfView, 0.1f, 179.9f);
        }
    }
}