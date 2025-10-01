---
title: People
date: 2022-10-24

type: landing

sections:
  - block: slider
    content:
      slides:
        - title: ''
          content: ''
          align: center
          background:
            image:
              filename: grp1.JPEG
              size: 'contain'
            position: center
        - title: ''
          content: ''
          align: center
          background:
            image:
              filename: grp2.JPEG
              size: 'contain'
            position: center
    design:
      slide_height: '25vh'
      is_fullscreen: false
  - block: people
    content:
      title: Our Team
      # Choose which groups/teams of users to display.
      #   Edit `user_groups` in each user's profile to add them to one or more of these groups.
      user_groups:
          - Director
          - Postdoctoral Researchers
          - Ph.D. Students
          - M.S. Students
          - Affiliated Students
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
