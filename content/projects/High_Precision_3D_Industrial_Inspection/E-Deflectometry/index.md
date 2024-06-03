---
title: Event Deflectometry and Triangulation for Mixed Reflectance Scenes

media:
    tag: "HPrecision3D-Event-Deflectometry"
    
---
{{< figure src="header_img.png" class="project-section-wide-image" width="700px" >}}
Event-based structured light systems have recently been introduced as an exciting alternative to conventional frame-based triangulation systems for the 3D measurements of diffuse surfaces. Important benefits include the fast capture speed and the high dynamic range provided by the event camera - albeit at the cost of lower data quality. So far, both low-accuracy event-based and high-accuracy frame-based 3D imaging systems are tailored to a specific surface type, such as diffuse or specular, and can not be used for a broader class of object surfaces (“mixed reflectance scenes").  In this work, we present a novel event-based structured light system that enables fast 3D imaging of mixed reflectance scenes with high accuracy. On the captured events, we use epipolar constraints that intrinsically enable decomposing the measured reflections into diffuse, two-bounce specular, and other multi-bounce reflections. The diffuse surfaces in the scene are reconstructed using triangulation. Then, the reconstructed diffuse scene parts are leveraged as a ”display" to evaluate the specular scene parts via deflectometry.
This novel procedure allows us to use the entire scene as a virtual screen, using only a scanning laser and an event camera. The resulting system achieves fast and motion-robust (14Hz) reconstructions of mixed reflectance scenes with <500m depth error. Moreover, we introduce an ”ultrafast" capture mode (250Hz) for the 3D measurement of diffuse scenes.