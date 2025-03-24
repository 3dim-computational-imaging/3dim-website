---
title: Archiving the visual contents of analog film holograms using light field rendering and neural radiance fields (NeRF) 
section_weight: 90

media:
    tag: "CulturalHeritage_NERF"
    sort_by: weight_CulturalHeritage_NERF
---
{{< figure src="header_img.gif" class="project-section-wrap-image" width="600px" max_width="80%">}}
An analog hologram can record the complete three-dimensional light field of an object on a simple 2D film. Even more than 70 years after the invention of holography, watching an analog film hologram still seems like pure magic. The probably most fascinating feature is the seemingly perfect reconstruction of the recorded object that can be viewed from every possible perspective. Being an "active material," however, analog film holograms are prone to continuous degradation. This raises the question of how to "digitally preserve" the unique experience of viewing them for future generations, ideally without capturing terabytes of data. 

In this research track, we develop procedures to render the visual content of analog film holograms from sparse image data, which can be captured in seconds using off-the-shelf devices like mobile phones. Our approaches leverage light field rendering and Neural Radiance Fields (NeRF), a learning-based method for generating new views of complex volumetric scenes. For the latter, both our qualitative and quantitative experiments demonstrate that NeRF can generate scenes from novel viewpoints, even for captured analog holograms, and thus can digitally preserve them without complicated optical setups. 