---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: markdown
    id: landing-header
    content:
      title: |
        Computational 3D Imaging and Measurement Lab
      subtitle: |
        <h3>At the <a href="https://www.optics.arizona.edu" class="optics-label-hero">Wyant College of Optical Sciences</a> - University of Arizona</h3>
      text: |
        {{< figure src="welcomeGroupPhoto4.jpg" library="true" class="project-section-wrap-image" width="600px" max_width="80%">}}
        We are working on a broad variety of problems in quantitative vision and computational imaging. Our research combines teachings from physical optics, image and signal processing,  computer vision, and information theory. Our goal is to invent, develop, and build the next generation of 2D/3D computational imaging and display devices that overcome traditional limitations (e.g., in resolution, dynamic range, speed) to “make the unseen visible”.  These instruments and the underlying principles will represent key technologies to foster transformational technical changes in the next decades.
        
        Current applications of our developed techniques and systems can be found in medicine, VR/AR/MR, robotics, industrial inspection, remote sensing, automotive sensing, metrology, forensics, or cultural heritage preservation. Our present research includes novel methods for high-resolution holographic displays, [unconventional methods for precise VR eye tracking](/projects/swh_imaging_through_scattering/), and the implementation of high-precision metrology methods in [low-cost mobile handheld devices](/projects/computational_imaging_cultural_heritage/). Moreover, we develop novel [time-of-flight and structured light](/projects/high_precision_3d_industrial_inspection/) imaging techniques working at depth resolutions in the 100μm-range.
        
  
  - block: portfolio
    id: research
    content:
      title: Research
      subtitle:
      text:
      #count: 0
      filters:
        # Folders to display content from
        folders:
          - projects
        # Only show content with these tags
        tags: []
        # Exclude content with these tags
        exclude_tags: ["hide-project"]
        # Which Hugo page kinds to show (https://gohugo.io/templates/section-templates/#page-kinds)
        kinds:
          - section
      # Field to sort by, such as Date or Title
      sort_by: 'Date'
      sort_ascending: false
      #offset: 0
      #order: desc
      #page_type: projects
    design:
      view: 3
      columns: '1'
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: collection
    id: selected-publications
    content:
      title: Selected Publications
      subtitle: 'See [all publications by year>>](/publication)'
      text:
      count: 0
      filters:
        author: ''
        category: ''
        featured_only: true
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: publication
      sort_by: landing_weight
    design:
      view: citation
      columns: '2'

  - block: collection
    id: talks
    content:
      title: Talks
      subtitle: 'See our [talk archive>>](/talks) for more recordings'
      text:
      count: 4
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      sort_by: landing_weight
      page_type: talks
    design:
      view: community/talk
      columns: '2'
      
  - block: collection
    id: news
    content:
      title: News
      subtitle: 'See our [news archive>>](/news)'
      text:
      count: 8
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: news
    design:
      view: community/news
      columns: '2'

  - block: collection
    id: mediacoverage
    content:
      title: Media Coverage
      subtitle: '[Click here](/media) to view more news stories'
      text: 
      count: 3
      offset: 0
      order: desc
      page_type: media
    design:
      view: community/compact_dateless
      columns: '2'

  - block: markdown
    id: joinus
    content:
      title: Join Us
      subtitle:
      text: |
        We are always looking for motivated people interested in pursuing a research project or thesis in our lab. Prospective Students or Postdocs should have a background in Optics, Computer Science, Image and Signal Processing, or similar disciplines.
        
        Please contact [Prof. Willomitzer](mailto:fwillomitzer@arizona.edu) if you are interested.
    design:
      columns: '2'

  - block: markdown
    id: sponsoredresearch
    content:
      title: Sponsored Research
      subtitle: 'Past and Present'
      text: |
        The work shown on this website has been generously funded by the agencies and industry partners listed below. Prof. Willomitzer was directly awarded funding as Principal Investigator (PI) or Co-Principal Investigator (Co-PI) from NSF, OPTICA, Meta, Texas Instruments, NCMS, NEH, and MAGNA.
        {{<figure library="true" src="Sponsored_all.jpg" width="800">}}  
    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: markdown
    id: collaborations
    content:
      title: Collaborations
      subtitle: 'Past and Present'
      text: |
        {{<figure library="true" src="Collaborations_all.jpg" width="800">}}  
    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']
  
  - block: markdown
    id: contact
    content:
      title: Contact
      subtitle:
      text: |
        Florian Willomitzer

        fwillomitzer \[at\] arizona \[dot\] edu

        Wyant College of Optical Sciences - University of Arizona
        Computational 3D Imaging and Measurement (3DIM) Lab
        Meinel Building, Room 629
        1630 E University Blvd, Tucson, AZ 85721

    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']
  
  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
---