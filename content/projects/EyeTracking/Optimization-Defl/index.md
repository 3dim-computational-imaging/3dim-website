---
title: "Optimization-based inverse rendering using deflectometric information"
section_weight: 90
type: subproject

media:
    tag: "EyeTracking_OptimizationDeflectometry"
    sort_by: weight_EyeTracking_OptimizationDeflectometry
    
---
{{< figure src="header_img.png" class="project-section-wrap-image" width="400px" max_width="80%">}}
This method uses the known geometry of our calibrated deflectometric setup to develop a PyTorch3D-based differentiable rendering pipeline that simulates a virtual computer-generated (CG) eye model under screen illumination. Eventually, the images and screen-camera correspondence information of the real eye measurement are used to optimize the CG eye’s rotation, translation, and shape parameters with our renderer via gradient descent. This is done until the simulated setup with the CG eye produces images and correspondences that closely match the real measurements, and the gaze direction of the CG eye is eventually used as an estimate of the real eye's gaze direction. The method does not require a second camera. Moreover, it does not require a specific screen pattern and can even work with ordinary video frames of the main VR screen itself - also in single-shot. All evaluated errors are below 0.5 degrees. 