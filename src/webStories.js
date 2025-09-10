export const webStories = {
  "numbers-game": {
    "id": "numbers-game",
    "title": "The Number's Game",
    "description": "A detective investigates a mysterious murder with cryptic numerical clues, only to discover a shocking truth about himself.",
    "startNode": "crime-scene",
    "nodes": {
      "crime-scene": {
        "id": "crime-scene",
        "text": "Detective Marcus Kane stands over the body of Dr. Elena Vasquez, a renowned numerologist found dead in her study. The room is eerily organized, with numbers scrawled on papers everywhere. Rain patters against the window - the same sound from last night, though you can't remember why that seems important. On her desk, you notice a note with '777' circled in red, and mysteriously, a business card with your name on it. Strange... you don't remember ever meeting her.",
        "choices": [
          {
            "text": "Examine the '777' note more closely",
            "nextNode": "examine-777"
          },
          {
            "text": "Check why your business card is here",
            "nextNode": "business-card"
          },
          {
            "text": "Search the room for more clues",
            "nextNode": "room-search"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "examine-777": {
        "id": "examine-777",
        "text": "The number 777 is written in Dr. Vasquez's handwriting, with small notes around it: 'Perfect number... completion... but also danger.' Below it, she's written 'M.K. - 7/7 at 7:17.' That's today's date and... wait, 7:17 PM. That was exactly when you were driving home last night through the rainy streets. A flash of memory hits you: windshield wipers struggling against heavy rain, headlights cutting through darkness. But why would Dr. Vasquez know about your evening commute?",
        "choices": [
          {
            "text": "Try to remember what happened at 7:17 PM",
            "nextNode": "memory-attempt"
          },
          {
            "text": "Check your car for any damage",
            "nextNode": "check-car"
          },
          {
            "text": "Dismiss this as meaningless coincidence",
            "nextNode": "dismiss-clue"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "business-card": {
        "id": "business-card",
        "text": "Your business card looks worn, as if it's been handled frequently. On the back, someone has written in Dr. Vasquez's handwriting: 'Detective Kane - the answer lies in 3-7-7. Karma finds its way home.' Three-seven-seven... your badge number is 377. But how could she know this? You flip the card over and notice something else - there's a small red stain on one corner that looks suspiciously like dried blood. Your hands begin to tremble slightly as you examine it.",
        "choices": [
          {
            "text": "Have the blood stain tested immediately",
            "nextNode": "blood-test"
          },
          {
            "text": "Research the meaning of 377 in numerology",
            "nextNode": "numerology-377"
          },
          {
            "text": "Call the station about any prior contact",
            "nextNode": "station-call"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "room-search": {
        "id": "room-search",
        "text": "Searching the study methodically, you find Dr. Vasquez's appointment calendar. Yesterday's date is marked with a red X and the notation '7:17 PM - fate collides.' Her computer screen shows multiple browser tabs open: car accident reports from last night, your police personnel file, and a numerology article about guilt and karmic debt. A chill runs down your spine as you see a news headline: 'Hit-and-Run on Maple Street Leaves Woman Dead.' The timestamp shows 7:17 PM.",
        "choices": [
          {
            "text": "Read the hit-and-run article carefully",
            "nextNode": "hit-run-article"
          },
          {
            "text": "Check why she was researching your file",
            "nextNode": "personnel-file"
          },
          {
            "text": "Look for security camera footage",
            "nextNode": "security-footage"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "memory-attempt": {
        "id": "memory-attempt",
        "text": "You close your eyes and force yourself to remember last night at 7:17 PM. Fragments return like pieces of a shattered mirror: heavy rain drumming on your windshield, your wipers struggling to clear the water, classic rock playing on the radio. Then suddenly - a figure in red stepping into your headlights. A sickening thud that reverberates through your body. The radio goes silent. After that... nothing. Complete blackness until you woke up in your own bed this morning with a splitting headache and muddy shoes.",
        "choices": [
          {
            "text": "Go to Maple Street to look for evidence",
            "nextNode": "maple-street"
          },
          {
            "text": "Check hospital records for accident victims",
            "nextNode": "hospital-records"
          },
          {
            "text": "Try to suppress these disturbing memories",
            "nextNode": "suppress-memories"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "check-car": {
        "id": "check-car",
        "text": "In the police parking garage, you examine your sedan with growing dread. There's a small but unmistakable dent on the front bumper that definitely wasn't there two days ago. Paint is scraped away, revealing bare metal underneath. Caught in the headlight assembly is a piece of red fabric - the same shade as the scarf Dr. Vasquez is wearing in the crime scene photos. Your breath catches in your throat as the implications sink in. How is this possible?",
        "choices": [
          {
            "text": "Take the fabric to forensics immediately",
            "nextNode": "forensics"
          },
          {
            "text": "Remove the evidence and destroy it",
            "nextNode": "destroy-evidence"
          },
          {
            "text": "Photograph everything first",
            "nextNode": "document-evidence"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "hit-run-article": {
        "id": "hit-run-article",
        "text": "The article describes a fatal hit-and-run at 7:17 PM on Maple Street. The victim was Dr. Elena Vasquez, 42, struck while crossing in heavy rain. No witnesses, no leads, the driver fled the scene. But here's the impossible part - if Dr. Vasquez died in a car accident last night, how is she also found murdered in her study this morning? You read the article three times, but the facts don't change. Two different deaths, same person, twelve hours apart.",
        "choices": [
          {
            "text": "Check the coroner's report immediately",
            "nextNode": "coroner-report"
          },
          {
            "text": "Verify if she had an identical twin",
            "nextNode": "twin-investigation"
          },
          {
            "text": "Question the crime scene authenticity",
            "nextNode": "scene-authenticity"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "forensics": {
        "id": "forensics",
        "text": "The forensics team works with urgent efficiency. Within an hour, they confirm your worst fears: the red fabric matches Dr. Vasquez's scarf perfectly, and DNA evidence on your bumper proves beyond doubt that you struck her. But the timeline makes no sense. The car accident was at 7:17 PM yesterday, yet the body in the study shows she died around midnight. Blood analysis confirms she's been dead for approximately 15 hours. The forensics chief looks puzzled: 'Detective Kane, this evidence suggests she died twice.'",
        "choices": [
          {
            "text": "Investigate the study death more thoroughly",
            "nextNode": "study-investigation"
          },
          {
            "text": "Search Dr. Vasquez's house for answers",
            "nextNode": "house-search"
          },
          {
            "text": "Turn yourself in immediately",
            "nextNode": "immediate-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "study-investigation": {
        "id": "study-investigation",
        "text": "Re-examining the study with a magnifying glass, you notice inconsistencies. There's no forced entry, no signs of struggle, and the body position seems too perfect, almost staged. Looking closer at what you assumed was Dr. Vasquez's corpse, you make a shocking discovery: it's an incredibly realistic mannequin dressed in her clothes, complete with a wig and makeup. But why would someone create this elaborate deception? Who had access to stage this scene?",
        "choices": [
          {
            "text": "Search for Dr. Vasquez's real body",
            "nextNode": "real-body-search"
          },
          {
            "text": "Check building security records",
            "nextNode": "security-records"
          },
          {
            "text": "Dust the mannequin for fingerprints",
            "nextNode": "mannequin-prints"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "maple-street": {
        "id": "maple-street",
        "text": "Maple Street in daylight reveals the scene of last night's tragedy. Skid marks on the wet asphalt tell the story: a car traveling at normal speed, sudden braking, but not enough time to stop. You find broken glass from a headlight - your headlight - scattered near the crosswalk. A red scarf caught on a nearby fence post flutters in the wind like a accusatory flag. Local shop owners mention seeing police cars here last night, but no one saw the actual accident through the heavy rain.",
        "choices": [
          {
            "text": "Interview potential witnesses more thoroughly",
            "nextNode": "witness-interviews"
          },
          {
            "text": "Check nearby traffic cameras",
            "nextNode": "traffic-cameras"
          },
          {
            "text": "Return to the station with evidence",
            "nextNode": "return-station"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "real-body-search": {
        "id": "real-body-search",
        "text": "Following your detective instincts and a growing sense of dread, you search the building systematically. In the basement storage room, hidden behind boxes of old files, you find what you've been dreading: Dr. Vasquez's real body, wrapped in plastic sheeting. She's been dead since yesterday evening - exactly 7:17 PM, just as the car accident indicated. Suddenly, fragments of suppressed memory flood back: panic after the accident, loading her body into your car, bringing it here in the dead of night.",
        "choices": [
          {
            "text": "Face the truth and turn yourself in",
            "nextNode": "confession"
          },
          {
            "text": "Try to cover up the evidence further",
            "nextNode": "cover-up-attempt"
          },
          {
            "text": "Call for psychiatric evaluation",
            "nextNode": "psychiatric-help"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "traffic-cameras": {
        "id": "traffic-cameras",
        "text": "The traffic camera footage from last night is grainy but telling. At exactly 7:17 PM, your patrol car is clearly visible approaching the intersection. Dr. Vasquez steps into the crosswalk, obscured by sheets of rain. The impact is swift and devastating. But what the camera captures next chills you to the bone: instead of calling for help, you load her body into your vehicle and drive away. Your own face is clearly visible in the footage, methodical and calm, as if in a trance.",
        "choices": [
          {
            "text": "Delete the footage to protect yourself",
            "nextNode": "delete-footage"
          },
          {
            "text": "Accept responsibility for your actions",
            "nextNode": "accept-responsibility"
          },
          {
            "text": "Show the footage to a psychiatrist",
            "nextNode": "show-psychiatrist"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "confession": {
        "id": "confession",
        "text": "You walk into the police station and surrender your badge and gun. In a voice barely above a whisper, you confess everything to Captain Rodriguez. The hit-and-run was a tragic accident - poor visibility, Dr. Vasquez stepping out at the worst possible moment. But your guilt and trauma caused a complete mental breakdown. You moved her body, staged the fake murder scene, and then suppressed the memories so completely that you actually investigated your own crime. The numerology clues were your subconscious mind trying to guide you to the truth.",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      "destroy-evidence": {
        "id": "destroy-evidence",
        "text": "In a moment of panic, you destroy the red fabric and try to repair the damage to your car. But guilt and paranoia consume you like a cancer. Every number you see becomes a torment - 7:17 on clocks, 377 on license plates, 777 on slot machines. You can't sleep, can't eat, can't function as a detective. Your erratic behavior alerts your colleagues, and within a week, Internal Affairs launches an investigation. The truth always surfaces, and your attempt to hide it only makes your fall from grace more complete.",
        "choices": [],
        "isEnding": true,
        "endingType": "bad"
      },
      "delete-footage": {
        "id": "delete-footage",
        "text": "You delete the camera footage and convince yourself that no one will ever know. But Dr. Vasquez was a respected member of the community, and her disappearance doesn't go unnoticed. Missing person reports lead to a massive investigation. Without the footage as evidence, the case drags on for months, torturing her family with false hope. Your guilt grows unbearable as you watch them suffer, knowing you could end their pain but choosing not to. Eventually, you crack under the psychological pressure.",
        "choices": [],
        "isEnding": true,
        "endingType": "bad"
      },
      "dismiss-clue": {
        "id": "dismiss-clue",
        "text": "You decide the numbers are just the paranoid ramblings of a disturbed mind and prepare to close the case as a simple break-in gone wrong. But as you turn to leave, Dr. Vasquez's computer chimes with a new email notification. The subject line reads: 'Detective Kane - The truth will find you. 7:17 never forgets.' Your blood turns to ice. The email was sent from her account... but she's been dead for hours. Who could be doing this?",
        "choices": [
          {
            "text": "Open the mysterious email",
            "nextNode": "mysterious-email"
          },
          {
            "text": "Close the case immediately and leave",
            "nextNode": "flee-scene"
          },
          {
            "text": "Check the computer's scheduled emails",
            "nextNode": "scheduled-emails"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "mysterious-email": {
        "id": "mysterious-email",
        "text": "The email contains only a series of numbers: 7-17-19-85, followed by coordinates and a single sentence: 'Come alone or the video goes to Internal Affairs.' The coordinates lead to Riverside Cemetery, section 7, plot 17. You realize with growing horror that this is exactly where Dr. Vasquez would be buried. But how can someone who's dead be sending you threatening emails? Unless... someone else knows what you did.",
        "choices": [
          {
            "text": "Go to the cemetery coordinates",
            "nextNode": "cemetery-meeting"
          },
          {
            "text": "Ignore the threat and hope it goes away",
            "nextNode": "ignore-threat"
          },
          {
            "text": "Try to trace who sent the email",
            "nextNode": "trace-sender"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "cemetery-meeting": {
        "id": "cemetery-meeting",
        "text": "At the cemetery, you find a figure waiting by plot 7:17 - Dr. Vasquez's assistant, Maria Santos. She holds a tablet showing the traffic camera footage of your accident. 'Dr. Vasquez was my mentor,' she says, tears streaming down her face. 'She taught me that numbers never lie, and neither should we. She knew something would happen to her - she'd been getting threatening calls. That's why she set up the automated emails with all the evidence. She wanted the truth to come out.'",
        "choices": [
          {
            "text": "Tell Maria the complete truth",
            "nextNode": "tell-truth"
          },
          {
            "text": "Try to convince her it was an accident",
            "nextNode": "plead-accident"
          },
          {
            "text": "Attempt to silence her permanently",
            "nextNode": "silence-witness"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "tell-truth": {
        "id": "tell-truth",
        "text": "You tell Maria everything