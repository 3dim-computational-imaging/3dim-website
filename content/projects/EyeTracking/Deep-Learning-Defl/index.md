---
title: Deep learning-based deflectometric eye tracking
section_weight: 80
type: subproject

media:
    tag: "EyeTracking_DeepLearningDeflectometry"
    sort_by: weight_EyeTracking_DeepLearningDeflectometry

---
{{< figure src="header_img.png" class="project-section-wrap-image" width="400px" max_width="80%">}}
The deep learning-based deflectometric eye-tracking approach uses the “digital twin" of our Deflectometry setup to generate a training dataset simulating the deflectometric pattern reflection for different eye shapes at different locations and rotation angles. Instead of trying to render photorealistic intensity camera images under varying ambient lighting and screen illumination (which is difficult and leads to an “unrealistic" training dataset), we use the retrieved camera-screen correspondence maps as input to our model. The network learns the relation between input correspondence map and gaze direction. The simulated correspondence maps closely resemble the real captured correspondence maps which are used for gaze evaluation. Moreover, the use of “pure" correspondence maps prevents the network from learning secondary eye features (such as veins and wrinkles in the periocular region), which may not be present in real images. 

Our first quantitative experiments on a realistic rotated eye model deliver gaze errors below 1°.  