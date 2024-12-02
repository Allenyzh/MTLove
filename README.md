# MTLove

MTLove is an interactive social online experience, it aims to provide a fun platform for those who are willing to stimulate cherished and interesting engagement moments of life.

---

# Goal

- Build a safe and fun community.
- Encourage user to explore more scenarios

# Core Technology

- ### Front-End:
  Node.js, React, Vite, Tailwind CSS
- ### Back-End:
  Python, Django
- ### Cloud and storage:
  Cloudflare Pages, Horku, MongoDB

# Data storage structure

- ### conversations
  ```
  {
  scenario : string,
  status : { current_score : number , max_score : number },
  dialogue : [{
  id : int,
  role : string,
  message : string,
  score_change : number,
  }]
  metadata : { id : number, uid : number }
  }
  ```
- ### user
  ```
  {
  uid : number,
  name : string,
  }
  ```
- ### scenarios
  ```
  scenario : [{
              name : string,
              img : string,
              description : string,
              total_win : number,
              total_lose : number,
              }]
  ```
---
# Wireframe
- ### Scenarios
- ### Challenge a Scenario
- ### Challenge finished
- ### VIew Finished CHallenge