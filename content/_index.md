---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: hero
    id: summary
    content:
      title: |
        WIP Website
      image:
        filename: welcome.jpg
      text: |
        <br>
        Welcome to the Work-In-Progress 3DIM Website! This page is currently under construction. Click <a href="https://3dim.northwestern.edu/">here</a> to go to our current website.
  
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
        exclude_tags: []
        # Which Hugo page kinds to show (https://gohugo.io/templates/section-templates/#page-kinds)
        kinds:
          - page
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
      subtitle: 'See [all publications by year>>](/publication)</a>'
      text: cool text B)
      count: 0
      filters:
        author: ''
        category: ''
        exclude_featured: true
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: publication
    design:
      view: citation
      columns: '2'

  - block: collection
    id: talks
    content:
      title: Talks
      subtitle:
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
      page_type: talks
    design:
      view: community/talk
      columns: '2'

  - block: markdown
    id: mediacoverage
    content:
      title: Media Coverage
      subtitle:
      text: This could possibly be a set of blocks, like the above sections!
    design:
      columns: '2'

  - block: markdown
    id: joinus
    content:
      title: Join Us
      subtitle:
      text: TODO
    design:
      columns: '2'

  - block: markdown
    id: sponsoredresearch
    content:
      title: Sponsored Research
      subtitle: 'Past and Present'
      text: |
        The work shown on this website has been generously funded by the following agencies and industry partners:
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
      text:
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