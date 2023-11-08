---
weight: 10
title: The Single-Shot 3D Movie Camera
date: 2023-11-08
summary: 3D videos of fast scenes with high data quality (5 associated publications)
image:
  preview-only: true

sections:
    - block: markdown
    content:
      title:
      subtitle: ''
      text: |
        The ‘Single-Shot 3D Movie Camera’ is a motion-robust line triangulation (‘structured light’) sensor that enables the true single-shot acquisition of 3D data with an high resolution and high point cloud density which is as good as physics and information theory allows. This is possible, because the sensor concept solves the ambiguity problem (which is inherent to each triangulation sensor and limits its information theoretical efficiency) without relying on spatial or temporal codification of the projected signals. The prototype sensor delivers 300k independent 3D points with high depth precision (δz < 200μm on human skin) from each 1 Mpix camera frame. A 3D sensor with these features allows for a continuous 3D measurement of fast-moving or deforming objects, resulting in a continuous 3D movie. Like a hologram, each movie-frame encompasses the full 3D information about the object surface, and the observation perspective can be varied while watching the 3D movie (see videos).
        *Applications:* The ‘Single-Shot 3D Movie Camera’ shows its unique properties at time sensitive 3D measurement and -video applications that require highest data qualities and/or point cloud densities. Mobile 3D (laser) scanning (e.g., from vehicles or drones), motion compensation in medical applications (e.g., motion management in radiation therapy), human-robot interaction, tracking of subtle body language expressions in behavioral sciences, or 3D video conferencing (virtual avatar) in VR are just a few potential applications. Additionally, the concept allows for a broad range of industrial 3D scanning applications, like deforming car bodies or airbags during crash tests, fast moving mechanical parts on conveyor belts, or 3D stress analysis (bullet impact, vibration, deformation, etc.). 

    design:
      columns: '1'
      background:
        image: 
          filename: coders.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen
---