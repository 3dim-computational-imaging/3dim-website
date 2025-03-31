---
title: Single-Shot Stereo Deflectometry approach with shape/normal-based geometric processing
section_weight: 100
type: subproject

media:
    tag: "EyeTracking_StandardDeflectometry"
    sort_by: weight_EyeTracking_StandardDeflectometry

---
{{< figure src="header_img.png" class="project-section-wrap-image" width="400px" max_width="80%">}}
This method uses a crossed fringe pattern on the screen to measure the surface normal map of the eye surface. To establish the required correspondence between the screen and the camera, the phase information for both fringe directions is evaluated in single-shot via a 2D continuous wavelet transform approach. The second camera is used to solve the Deflectometry normal-depth ambiguity problem via stereo deflectometry. The (small) overlap region between both cameras is used to reconstruct an initial surface model of the eye. Eventually we use deflectometric correspondences in conjunction with geometric constraints about the eye ball to expand the measured surface and retrieve the eye’s optical axis via backtracing of the captured surface normal towards the eye center. Our current experimental evaluations achieve gaze errors on a realistic model eye below only 0.13°. Moreover, we have demonstrated quantitative measurements on real human eyes in vivo, reaching accuracy values between only 0.46° and 0.97°. 