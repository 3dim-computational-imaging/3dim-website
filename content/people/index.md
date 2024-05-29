---
title: People
date: 2022-10-24

type: landing

sections:
  - block: slider
    content:
      slides:
        - title:
          content:
          align: center
          background:
            position: right
            color: '#666'
            brightness: 0.7
            media: albums\groupphotos\grp1.jpeg
            fit: cover
        - title:
          content:
          align: center
          background:
            position: center
            color: '#555'
            brightness: 0.7
            media: albums\groupphotos\grp2.jpeg
            fit: cover
    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: ''
      is_fullscreen: true
      # Automatically transition through slides?
      loop: true
      # Duration of transition between slides (in ms)
      interval: 5000

  - block: people
    content:
      title: Our Team
      # Choose which groups/teams of users to display.
      #   Edit `user_groups` in each user's profile to add them to one or more of these groups.
      user_groups:
          - Principal Investigator
          - Postdoctoral Researchers
          - Ph.D. Students
          - Researcher Specialists
          - M.S. Students
          - Visitors
          - Alumni
          - Administration
      sort_by: Params.last_name
      sort_ascending: true
    design:
      show_interests: false
      show_role: true
      show_social: true
---
