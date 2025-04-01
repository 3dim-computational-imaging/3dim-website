---
title: ''
section_weight: 1000
type: subproject

media:
    tag: "EyeTracking_Main"
    sort_by: weight_EyeTracking_Main

---
{{< figure src="header_img.png" class="project-section-wrap-image" width="600px" max_width="80%" >}}
Eye-tracking plays a crucial role in the development of virtual reality devices, neuroscience research, and psychology. Despite its significance in numerous applications, achieving an accurate, robust, and fast eye-tracking solution remains a considerable challenge for current state-of-the-art methods. While existing reflection-based techniques (e.g., "glint tracking") are considered the most accurate, their performance is limited by their reliance on sparse 3D surface data acquired solely from the cornea surface. 

In this research track, we rethink how specular reflections can be used for eye tracking: We have developed a set of novel methods for accurate and fast evaluation of the gaze direction that utilize dense deflectometric information. Deflectometry is a well-known technique in optical 3D metrology for the measurement of specular surfaces. For the first time ever, our group has developed a family of “computational deflectometry” methods for eye tracking.  The reflection of a patterned screen is observed over the specular eye surface, with the information about the gaze being encoded in the deformation of the pattern in the camera image. With “standard” screens and cameras (~1Mpix resolution), improvements in the number of acquired reflection surface points (“glints”) of factors >3000X and higher (compared to the current state-of-the-art in glint tracking) are easily achievable. The additional information allows for eye tracking at high accuracy. 

{{< collapsible-section title="News and Press (Click to Expand)" >}}
Project was featured in [University of Arizona News](https://news.arizona.edu/news/new-3d-technology-paves-way-next-generation-eye-tracking), [Optics.org](https://optics.org/news/16/4/5), and [Phys.org](https://phys.org/news/2025-03-superhuman-vision-powerful-3d-imaging.html).
{{< /collapsible-section >}}

So far, we have explored 3 different approaches to decode the information about the gaze direction, that is encoded in the deflectometric images: 