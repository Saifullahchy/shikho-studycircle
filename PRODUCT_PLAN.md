# StudyCircle V1 — Product Plan

## Public Links

* **Live V1 prototype:** `PASTE_VERCEL_LINK_HERE`
* **Build trace / prompt log:** `PASTE_BUILD_TRACE_LINK_HERE`
* **GitHub repo:** `PASTE_REPO_LINK_HERE`
* **V1/V2/V3 plan:** This document

## Access Check

This prototype is viewable without login, download, or access request.

Access confirmed from:

* Incognito browser: `Yes / No`
* Non-owner device/account: `Yes / No`
* Date checked: `PASTE_DATE`

---

## Product Context

StudyCircle is a small social learning layer for Shikho students. The goal is to help a student quickly find a relevant study group based on class, group, version, and enrolled subjects, then move into a daily learning loop.

For V1, I focused on the core activation loop:

**Suggested Circle → Join → Practice MCQ → See right/wrong feedback → Learn from explanation → Track progress**

The prototype is intentionally not a static mockup. It is a clickable app with persistent state using browser localStorage. A reviewer can join a circle, leave the page, come back, refresh, and still see the joined state.

---

## V1 — Working Prototype

### Goal

Validate whether a Class 10 Science student can discover and join a relevant StudyCircle, then start a meaningful learning action immediately.

### What is included

* Mobile-first StudyCircle home
* Suggested circle recommendation
* Join / leave StudyCircle
* Persistent joined state with localStorage
* Circle detail page
* Subject-wise StudyCircle cards
* MCQ practice flow
* Answer selection
* Right/wrong feedback
* Wrong-answer explanation
* Common mistake explanation
* Progress screen
* Dynamic mock data for Physics, Math, Chemistry, Biology, and Class 9 Physics

### V1 Persistence

V1 uses `localStorage` for prototype persistence.

This allows the reviewer to test the core behavior without login or backend setup:

1. Open the prototype
2. Join a StudyCircle
3. Navigate away
4. Come back
5. Refresh the browser
6. Joined state remains visible

### V1 Content Note

The V1 prototype uses subject-wise SSC-style mock questions. These are realistic sample questions created to demonstrate the StudyCircle learning loop. They are not official Shikho content or official board exam questions.

In production, the questions, explanations, lessons, and progress data would come from Shikho’s verified content and quiz database.

### V1 Not Included

To keep the prototype focused, I intentionally did not build:

* Real backend
* Authentication
* Real-time chat
* Notifications
* Admin panel
* Teacher moderation
* Voice notes
* Group discussion threads
* Payment or subscription logic

These are important, but not necessary to prove the V1 activation loop.

---

## V2 — Backend + Real User State

### Goal

Move from prototype persistence to real student-level persistence across devices.

### What I would add

* Authentication
* Student profile sync
* Backend StudyCircle membership
* Real question bank integration
* Server-side progress tracking
* Attempt history
* Per-subject performance
* Recommendation logic based on:

  * Class
  * Group
  * Version
  * Enrolled subjects
  * Weak topics
  * Practice behavior

### Key V2 Product Question

Does StudyCircle improve learning activity compared to a normal solo practice flow?

### Metrics to track

* Join rate from recommended circle
* First practice start rate
* MCQ completion rate
* Explanation view rate after wrong answer
* Return rate after 24 hours
* Weekly goal completion

### V2 Product Idea

<img width="941" height="1672" alt="v2-suggestions" src="https://github.com/user-attachments/assets/070034ca-9ef8-449b-8db8-c4ec90f5f0cf" />
<img width="941" height="1672" alt="v2-studycircle" src="https://github.com/user-attachments/assets/cf28e4bb-8efd-4ed0-9012-c2b2d66152fc" />
<img width="941" height="1672" alt="v2-report" src="https://github.com/user-attachments/assets/ebf1aaeb-d8df-4cf5-86ed-33b1830a74dc" />
<img width="941" height="1672" alt="v2-discussion" src="https://github.com/user-attachments/assets/1ed87120-e870-4538-a473-e08232ea966f" />

---

## V3 — Social Learning Layer

### Goal

Turn StudyCircle from a solo practice helper into a guided peer-learning experience.

### What I would add

* Real-time circle activity
* Topic-based discussion
* Teacher or mentor prompts
* Daily leaderboard
* Smart nudges
* Streak recovery
* Group goals
* Weak-topic study groups
* Moderation tools
* Content quality controls
* Parent/teacher progress visibility where appropriate

### V3 Product Bet

Students are more likely to stay consistent when they feel they are studying with others who have the same class, subject, and exam goal.

---

## Success Criteria

The V1 prototype is successful if a reviewer can understand and test the core loop in under two minutes:

1. A relevant StudyCircle is recommended
2. The student joins it
3. The state persists
4. The student starts MCQ practice
5. The student receives useful feedback
6. The student can see progress



The goal was not to build a full production system. The goal was to make a focused, testable product prototype that demonstrates product judgment, interaction design, and the next clear engineering path.
