---
# Weight on landing page
weight: 10

# Title
title: Deflectometric Eye Tracking

# Summary (if no summary, enter ''. Make sure to include a space after the colon.)
summary: ' '

# Please do not update the following header stuff
view: community/projectsection
wrapperOverrideWidth: 80
image:
  preview_only: true
  
# Markdown code goes below the triple dash:
---
{{< figure src="header_img.png" class="project-section-wide-image" width="60%" >}}
Eye-tracking plays a crucial role in the development of virtual reality devices, neuroscience research, and psychology. Despite its significance in numerous applications, achieving an accurate, robust, and fast eye-tracking solution remains a considerable challenge for current state-of-the-art methods. While existing reflection-based techniques (e.g., "glint tracking") are considered the most accurate, their performance is limited by their reliance on sparse 3D surface data acquired solely from the cornea surface. 

In this research track, we rethink how specular reflections can be used for eye tracking: We have developed a set of novel methods for accurate and fast evaluation of the gaze direction that utilize dense deflectometric information. Deflectometry is a well-known technique in optical 3D metrology for the measurement of specular surfaces. For the first time ever, our group has developed a family of “computational deflectometry” methods for eye tracking.  The reflection of a patterned screen is observed over the specular eye surface, with the information about the gaze being encoded in the deformation of the pattern in the camera image. With “standard” screens and cameras (~1Mpix resolution), improvements in the number of acquired reflection surface points (“glints”) of factors >3000X and higher (compared to the current state-of-the-art in glint tracking) are easily achievable. The additional information allows for eye tracking at high accuracy. 

So far, we have explored 3 different approaches to decode the information about the gaze direction, that is encoded in the deflectometric images: 