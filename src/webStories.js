// Auto-generated stories for web deployment
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
        "text": "You tell Maria everything: the accident, the panic, moving the body, the memory loss, and the staged crime scene. She listens with a mixture of horror and pity. 'Dr. Vasquez always said that the universe has a way of balancing the scales,' Maria says softly. 'She'd want justice, but she'd also want you to get help.' Together, you walk to the police station where Maria serves as a witness to your voluntary confession. The healing can finally begin.",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      "flee-scene": {
        "id": "flee-scene",
        "text": "You flee the scene and try to forget everything, but the guilt follows you like a shadow. Days blend into weeks of sleepless nights and constant anxiety. You make increasingly erratic decisions on other cases, putting civilians at risk. Eventually, you're forced to take early retirement due to 'stress-related issues.' You spend the rest of your life haunted by the numbers 7:17, knowing that you could have done the right thing but chose cowardice instead.",
        "choices": [],
        "isEnding": true,
        "endingType": "bad"
      },
      "silence-witness": {
        "id": "silence-witness",
        "text": "In a moment of desperation, you draw your weapon on Maria. But she's prepared for this possibility and triggers a dead-man's switch on her phone. All the evidence - the traffic footage, Dr. Vasquez's emails, and audio recordings of this conversation - immediately upload to cloud storage and are sent to the FBI, Internal Affairs, and three major news outlets. Your attempt to silence the truth only ensures it will be broadcast to the world. Justice will be swift and merciless.",
        "choices": [],
        "isEnding": true,
        "endingType": "bad"
      },
      "accept-responsibility": {
        "id": "accept-responsibility",
        "text": "Standing in the traffic control room, watching your crime play out on the monitor, you finally accept the full weight of your actions. Dr. Elena Vasquez died because of your vehicle, and instead of doing the right thing, you compounded the tragedy with a cover-up born of panic and shame. You save the footage to a USB drive and walk directly to the District Attorney's office. 'I need to report a crime,' you tell the receptionist. 'My own.' The legal process will be difficult, but for the first time in days, you can breathe.",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      "coroner-report": {
        "id": "coroner-report",
        "text": "The coroner's report contains disturbing contradictions. Time of death is listed as 7:17 PM yesterday - matching the hit-and-run time exactly. But there are also fresh wounds consistent with being moved post-mortem. The coroner notes unusual positioning of the body and asks, 'Detective Kane, are you sure this woman wasn't moved after death? The lividity patterns don't match where she was found.'",
        "choices": [
          {
            "text": "Admit you moved the body",
            "nextNode": "confession"
          },
          {
            "text": "Claim you found her that way",
            "nextNode": "false-statement"
          },
          {
            "text": "Request a second opinion",
            "nextNode": "second-opinion"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "twin-investigation": {
        "id": "twin-investigation",
        "text": "Records show Dr. Vasquez was an only child with no twins or siblings. Birth certificates, school records, and medical files all confirm she was unique. This eliminates any possibility of mistaken identity. The woman you hit with your car and the woman found in the study are definitely the same person. But how can someone die twice? Your investigation has led you full circle back to an impossible truth.",
        "choices": [
          {
            "text": "Accept the supernatural explanation",
            "nextNode": "supernatural-ending"
          },
          {
            "text": "Look for rational explanations",
            "nextNode": "rational-search"
          },
          {
            "text": "Check your own mental state",
            "nextNode": "psychiatric-help"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "scene-authenticity": {
        "id": "scene-authenticity",
        "text": "Something about the crime scene feels wrong. The blood spatter doesn't match the supposed cause of death, and the body position is too perfect. Using luminol, you discover the real crime scene was cleaned and staged. This isn't where Dr. Vasquez died - someone moved her here and arranged everything to look like a murder. But who had access to stage this elaborate deception?",
        "choices": [
          {
            "text": "Check building security footage",
            "nextNode": "security-records"
          },
          {
            "text": "Search for the real crime scene",
            "nextNode": "real-scene-search"
          },
          {
            "text": "Question building residents",
            "nextNode": "resident-interviews"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "blood-test": {
        "id": "blood-test",
        "text": "The blood test results come back within hours: it's Dr. Vasquez's blood, but also contains traces of your own DNA. This means you handled the card after she was bleeding. Lab analysis shows the blood was deposited approximately 12 hours ago - right around the time of the hit-and-run accident. The evidence is mounting against you, piece by piece.",
        "choices": [
          {
            "text": "Confess to the accident",
            "nextNode": "confession"
          },
          {
            "text": "Claim contaminated evidence",
            "nextNode": "evidence-challenge"
          },
          {
            "text": "Demand a polygraph test",
            "nextNode": "polygraph-test"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "numerology-377": {
        "id": "numerology-377",
        "text": "Researching numerology, you discover that 377 represents 'karmic debt' and 'facing consequences for past actions.' Dr. Vasquez's notes elaborate: 'Number 377 indicates someone who must confront their hidden guilt. The universe will force truth to surface through synchronicities and numerical signs.' It's as if she predicted your investigation into your own crime.",
        "choices": [
          {
            "text": "Embrace the karmic interpretation",
            "nextNode": "karmic-acceptance"
          },
          {
            "text": "Dismiss it as coincidence",
            "nextNode": "dismiss-numerology"
          },
          {
            "text": "Research more about guilt patterns",
            "nextNode": "guilt-research"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "station-call": {
        "id": "station-call",
        "text": "Calling the station reveals no record of prior contact with Dr. Vasquez. No case files, no consultation requests, no reason for her to have your business card. Sergeant Williams mentions, 'Strange you should ask, Kane. Dr. Vasquez called yesterday around 6 PM asking about you specifically. Said she had important information about a case. We told her to contact you directly.' She called an hour before the accident.",
        "choices": [
          {
            "text": "Find out what information she had",
            "nextNode": "vasquez-information"
          },
          {
            "text": "Check your phone for missed calls",
            "nextNode": "missed-calls"
          },
          {
            "text": "Ask why she was asking about you",
            "nextNode": "inquiry-motive"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "personnel-file": {
        "id": "personnel-file",
        "text": "Dr. Vasquez had accessed your complete personnel file, including psychological evaluations and disciplinary records. She'd been researching officers with stress-related incidents, particularly those involving vehicles. A highlighted section shows your recent evaluation noted 'increased anxiety, sleep deprivation, and concerning lapses in memory.' Why was a numerologist researching troubled cops?",
        "choices": [
          {
            "text": "Contact the police psychologist",
            "nextNode": "police-psychologist"
          },
          {
            "text": "Check if other officers were researched",
            "nextNode": "other-officers"
          },
          {
            "text": "Investigate her client list",
            "nextNode": "client-investigation"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "security-footage": {
        "id": "security-footage",
        "text": "The building's security cameras captured something incredible: at 2:47 AM, your patrol car pulls up to the building. You can be seen dragging a large, heavy object wrapped in plastic into the basement. Your movements are robotic, almost sleepwalking. At 3:15 AM, you emerge alone and drive away. The timestamp shows this was after the hit-and-run but hours before you 'discovered' the body. You have no memory of these actions.",
        "choices": [
          {
            "text": "Turn yourself in immediately",
            "nextNode": "immediate-confession"
          },
          {
            "text": "Seek medical help for memory loss",
            "nextNode": "medical-help"
          },
          {
            "text": "Destroy the security footage",
            "nextNode": "destroy-security"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "hospital-records": {
        "id": "hospital-records",
        "text": "Hospital records show no Dr. Elena Vasquez was admitted last night, but there was a Jane Doe brought in at 8:30 PM with injuries consistent with a vehicle strike. She was pronounced dead on arrival. The body was released to the coroner's office at 11 PM, but mysteriously, it was signed out at 1 AM by someone using your badge number and forged signature.",
        "choices": [
          {
            "text": "Check the coroner's office immediately",
            "nextNode": "coroner-visit"
          },
          {
            "text": "Review the security tape from the hospital",
            "nextNode": "hospital-security"
          },
          {
            "text": "Investigate who used your badge",
            "nextNode": "badge-investigation"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "suppress-memories": {
        "id": "suppress-memories",
        "text": "You try to push the disturbing memories down, but they keep surfacing like bodies in water. The rain, the thud, the silence afterward. Your hands shake as you attempt to focus on other evidence, but every sound, every shadow brings back fragments of that night. Your partner notices your distress and suggests taking a break. Maybe forgetting isn't possible when guilt weighs this heavy.",
        "choices": [
          {
            "text": "Accept your partner's suggestion for a break",
            "nextNode": "partner-break"
          },
          {
            "text": "Continue investigating despite the stress",
            "nextNode": "stress-investigation"
          },
          {
            "text": "Confide in your partner about the memories",
            "nextNode": "partner-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "document-evidence": {
        "id": "document-evidence",
        "text": "You carefully photograph the damage to your car from every angle. The evidence is undeniable: dent, scrapes, fabric, blood traces. As you document everything, you realize you're building a case against yourself. Each photo is another nail in your coffin, but maybe that's what justice requires. Dr. Vasquez deserves the truth, even if it destroys you.",
        "choices": [
          {
            "text": "Submit the photos as evidence",
            "nextNode": "submit-evidence"
          },
          {
            "text": "Keep the photos as insurance",
            "nextNode": "keep-photos"
          },
          {
            "text": "Delete everything and walk away",
            "nextNode": "delete-evidence"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "house-search": {
        "id": "house-search",
        "text": "Dr. Vasquez's house reveals she'd been expecting trouble. Hidden cameras, multiple locks, and a safe containing files on various police officers - including you. She'd been investigating a pattern of cover-ups and suspicious incidents involving local law enforcement. Your file is the thickest, suggesting she'd been watching you for months, waiting for you to slip up.",
        "choices": [
          {
            "text": "Read your complete file",
            "nextNode": "complete-file"
          },
          {
            "text": "Check the other officers' files",
            "nextNode": "other-files"
          },
          {
            "text": "Look for who she was reporting to",
            "nextNode": "reporting-contact"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "immediate-confession": {
        "id": "immediate-confession",
        "text": "Unable to bear the weight of evidence and guilt any longer, you walk directly to Captain Rodriguez's office. 'I need to confess to a crime,' you say, placing your badge and gun on his desk. The confession pours out of you like a dam bursting: the accident, the cover-up, the memory suppression. Captain Rodriguez listens in stunned silence as you destroy your own career and freedom with the truth.",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      "security-records": {
        "id": "security-records",
        "text": "Building security records show the most disturbing evidence yet: you have badge access to this building, granted three months ago during a consultation Dr. Vasquez was doing for the police department. The logs show you entering at 2:47 AM last night and leaving at 3:15 AM. The access was legitimate, but your purpose was not. Security footage confirms you dragged something heavy into the basement during those 28 minutes.",
        "choices": [
          {
            "text": "Check what Dr. Vasquez was consulting about",
            "nextNode": "consultation-details"
          },
          {
            "text": "Review the basement security footage",
            "nextNode": "basement-footage"
          },
          {
            "text": "Turn yourself in before more evidence surfaces",
            "nextNode": "preemptive-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "mannequin-prints": {
        "id": "mannequin-prints",
        "text": "Dusting the mannequin reveals only your own fingerprints - everywhere. Your prints are on the face, the clothes, the positioning. This means you didn't just move a body; you carefully arranged this entire scene. The mannequin was positioned to match how Dr. Vasquez would have looked if she'd been murdered in her study. But why stage such an elaborate deception when you could have just reported the accident?",
        "choices": [
          {
            "text": "Try to remember staging the scene",
            "nextNode": "staging-memories"
          },
          {
            "text": "Analyze your psychological state",
            "nextNode": "psychological-analysis"
          },
          {
            "text": "Search for the real crime scene",
            "nextNode": "real-scene-search"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "witness-interviews": {
        "id": "witness-interviews",
        "text": "Thorough interviews reveal a troubling detail: Mrs. Chen from the corner shop saw a police car speed away after the impact, but she thought it was responding to the accident, not causing it. She noted the car number - yours. Her testimony, combined with the physical evidence, creates an unbreakable chain of proof. There's no escape from the truth now.",
        "choices": [
          {
            "text": "Accept the inevitable and confess",
            "nextNode": "inevitable-confession"
          },
          {
            "text": "Try to discredit Mrs. Chen's testimony",
            "nextNode": "discredit-witness"
          },
          {
            "text": "Plan to flee the jurisdiction",
            "nextNode": "plan-escape"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "return-station": {
        "id": "return-station",
        "text": "Back at the station, you try to file a standard hit-and-run report, but your hands shake as you type. Every detail you record is evidence against yourself. Sergeant Williams notices your distress and asks if you need backup on the case. The irony is overwhelming - you need backup to investigate your own crime. How did it come to this?",
        "choices": [
          {
            "text": "Ask for backup to maintain appearances",
            "nextNode": "fake-backup"
          },
          {
            "text": "Confess everything to Sergeant Williams",
            "nextNode": "williams-confession"
          },
          {
            "text": "Close the case as unsolvable",
            "nextNode": "close-case"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "cover-up-attempt": {
        "id": "cover-up-attempt",
        "text": "Panic overtakes rational thought as you try to dispose of Dr. Vasquez's body more permanently. But every action leaves more evidence, more traces, more lies to remember. The web of deception grows so complex that you start leaving yourself notes to keep track of your own lies. Eventually, you realize that the cover-up is worse than the original crime.",
        "choices": [
          {
            "text": "Stop before you make it worse",
            "nextNode": "stop-coverup"
          },
          {
            "text": "Continue with the deception",
            "nextNode": "deeper-deception"
          },
          {
            "text": "Confess to minimize the damage",
            "nextNode": "damage-control"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "psychiatric-help": {
        "id": "psychiatric-help",
        "text": "Dr. Sarah Martinez, the police psychologist, listens to your fragmented memories with growing concern. 'Detective Kane, what you're describing sounds like dissociative behavior triggered by extreme guilt and trauma. It's possible you've been acting without conscious awareness.' Her diagnosis is both terrifying and relieving - you're not evil, but you're not in control either.",
        "choices": [
          {
            "text": "Commit to intensive therapy",
            "nextNode": "therapy-commitment"
          },
          {
            "text": "Use the diagnosis as a legal defense",
            "nextNode": "insanity-defense"
          },
          {
            "text": "Reject the psychological explanation",
            "nextNode": "reject-diagnosis"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "show-psychiatrist": {
        "id": "show-psychiatrist",
        "text": "Dr. Martinez watches the traffic camera footage with professional detachment, then looks at you with deep concern. 'Marcus, this shows clear signs of a dissociative episode. You're moving mechanically, without normal emotional responses. The trauma of the accident triggered a complete psychological break. You need immediate help, not just legal counsel.'",
        "choices": [
          {
            "text": "Accept psychiatric treatment",
            "nextNode": "accept-treatment"
          },
          {
            "text": "Focus on legal implications first",
            "nextNode": "legal-focus"
          },
          {
            "text": "Question the validity of the diagnosis",
            "nextNode": "question-diagnosis"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "scheduled-emails": {
        "id": "scheduled-emails",
        "text": "Dr. Vasquez's computer reveals an elaborate system of scheduled emails designed to activate if she missed daily check-ins. The emails contain evidence of police corruption, including photos, recordings, and documents. Your case is just one part of a larger investigation she was conducting. If you don't stop this now, dozens of officers will be exposed.",
        "choices": [
          {
            "text": "Let the scheduled emails send",
            "nextNode": "emails-send"
          },
          {
            "text": "Try to stop the email system",
            "nextNode": "stop-emails"
          },
          {
            "text": "Warn the other officers",
            "nextNode": "warn-officers"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "ignore-threat": {
        "id": "ignore-threat",
        "text": "You delete the threatening email and try to forget about it, but the damage is already done. Within hours, copies of the traffic camera footage appear on local news websites with the headline 'Police Cover-Up: Detective Kills Woman, Stages Murder Scene.' Your phone explodes with calls from reporters, Internal Affairs, and horrified colleagues. Ignoring the truth only made its revelation more spectacular.",
        "choices": [],
        "isEnding": true,
        "endingType": "bad"
      },
      "trace-sender": {
        "id": "trace-sender",
        "text": "Tracing the email leads you to a VPN routing through multiple servers, but the original IP address belongs to Dr. Vasquez's assistant, Maria Santos. She's been watching you since the accident, gathering evidence, waiting for the right moment to strike. When you call her, she says simply: 'Dr. Vasquez taught me that justice is just mathematics - every action has an equal and opposite reaction.'",
        "choices": [
          {
            "text": "Meet with Maria to negotiate",
            "nextNode": "negotiate-maria"
          },
          {
            "text": "Report Maria for harassment",
            "nextNode": "report-maria"
          },
          {
            "text": "Confess before she releases evidence",
            "nextNode": "preemptive-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "plead-accident": {
        "id": "plead-accident",
        "text": "You explain to Maria that it was truly an accident - poor visibility, Dr. Vasquez stepping out unexpectedly, split-second timing that couldn't be avoided. Maria listens, then shows you additional footage: you sitting in your car for fifteen minutes after the impact, methodically planning your next moves. 'Accidents don't require fifteen minutes of contemplation, Detective Kane.'",
        "choices": [
          {
            "text": "Admit to the cover-up but not intent",
            "nextNode": "partial-admission"
          },
          {
            "text": "Claim temporary insanity",
            "nextNode": "insanity-claim"
          },
          {
            "text": "Accept full responsibility",
            "nextNode": "full-responsibility"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "false-statement": {
        "id": "false-statement",
        "text": "You lie to the coroner, claiming you found the body exactly as it appeared. But the coroner has decades of experience reading crime scenes and human nature. 'Detective Kane,' she says quietly, 'I've seen thousands of bodies in my career. This woman was moved, and moved by someone who cared about her dignity. The question is: why won't you tell me the truth?'",
        "choices": [
          {
            "text": "Maintain the lie despite suspicion",
            "nextNode": "maintain-lie"
          },
          {
            "text": "Break down and confess",
            "nextNode": "breakdown-confession"
          },
          {
            "text": "Ask for legal representation",
            "nextNode": "legal-representation"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "second-opinion": {
        "id": "second-opinion",
        "text": "The second coroner confirms the original findings and adds disturbing new details: fiber evidence suggests the body was transported in a police vehicle, and time of death analysis proves she died hours before being placed in the study. Both coroners now suspect police involvement. Your request for a second opinion only provided more evidence against you.",
        "choices": [
          {
            "text": "Come clean before they connect more dots",
            "nextNode": "preventive-confession"
          },
          {
            "text": "Try to frame another officer",
            "nextNode": "frame-colleague"
          },
          {
            "text": "Claim the evidence is contaminated",
            "nextNode": "contamination-claim"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "supernatural-ending": {
        "id": "supernatural-ending",
        "text": "Unable to find rational explanations, you conclude that Dr. Vasquez somehow returned from the dead to expose your crime. The guilt and supernatural terror drive you to complete madness. You spend your remaining years in a psychiatric facility, muttering about numbers and ghosts, never able to distinguish between reality and guilt-induced hallucinations.",
        "choices": [],
        "isEnding": true,
        "endingType": "bad"
      },
      "rational-search": {
        "id": "rational-search",
        "text": "Determined to find logical explanations, you discover the truth: there is no supernatural element. Your guilt-ridden mind created elaborate scenarios to avoid facing the simple reality that you killed Dr. Vasquez in an accident and covered it up. The 'mysterious' clues were your own subconscious attempts to guide yourself to confession. Reality is often more disturbing than fantasy.",
        "choices": [
          {
            "text": "Accept the psychological explanation",
            "nextNode": "psychological-acceptance"
          },
          {
            "text": "Seek professional help immediately",
            "nextNode": "immediate-help"
          },
          {
            "text": "Turn yourself in with this understanding",
            "nextNode": "understanding-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "evidence-challenge": {
        "id": "evidence-challenge",
        "text": "You claim the blood evidence was contaminated during collection, but forensics has followed perfect chain-of-custody procedures. Your challenge only draws more attention to the evidence and makes you look desperate. The forensics team now subjects every piece of evidence to additional scrutiny, uncovering even more damning proof of your guilt.",
        "choices": [
          {
            "text": "Abandon the challenge strategy",
            "nextNode": "abandon-challenge"
          },
          {
            "text": "Double down on contamination claims",
            "nextNode": "double-down"
          },
          {
            "text": "Confess before more evidence emerges",
            "nextNode": "evidence-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "polygraph-test": {
        "id": "polygraph-test",
        "text": "The polygraph test is a disaster. Every question about the accident triggers massive physiological responses indicating deception. Even questions about your own name cause stress reactions because your guilt has become so pervasive. The examiner stops the test early, concerned about your psychological state. 'Detective Kane, I've never seen readings like this. You need help.'",
        "choices": [
          {
            "text": "Confess after failed polygraph",
            "nextNode": "polygraph-confession"
          },
          {
            "text": "Claim the machine malfunctioned",
            "nextNode": "machine-malfunction"
          },
          {
            "text": "Request psychological evaluation",
            "nextNode": "psych-evaluation"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "karmic-acceptance": {
        "id": "karmic-acceptance",
        "text": "Embracing Dr. Vasquez's numerological interpretation, you see the investigation as cosmic justice working through mathematics. The number 377 led you here, 7:17 marked the moment of truth, and 777 represents completion of the karmic cycle. Perhaps this was always meant to happen. With this spiritual acceptance, confession feels less like destruction and more like liberation.",
        "choices": [
          {
            "text": "Confess as part of karmic balance",
            "nextNode": "karmic-confession"
          },
          {
            "text": "Seek spiritual guidance first",
            "nextNode": "spiritual-guidance"
          },
          {
            "text": "Write a confession letter citing karma",
            "nextNode": "karmic-letter"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "dismiss-numerology": {
        "id": "dismiss-numerology",
        "text": "You dismiss the numerology as meaningless superstition, but the numbers continue to haunt you. 377 on license plates, 7:17 on every clock you see, 777 in phone numbers and addresses. Your rational mind rejects the pattern, but your guilt-ridden psyche sees significance everywhere. The numbers become a form of psychological torture that logic cannot escape.",
        "choices": [
          {
            "text": "Seek therapy for obsessive thoughts",
            "nextNode": "obsession-therapy"
          },
          {
            "text": "Try to avoid all numbers",
            "nextNode": "number-avoidance"
          },
          {
            "text": "Confess to stop the mental torment",
            "nextNode": "torment-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "guilt-research": {
        "id": "guilt-research",
        "text": "Researching guilt patterns in Dr. Vasquez's notes, you find a detailed psychological profile that describes you perfectly: 'Subject shows classic signs of suppressed trauma. Will likely create elaborate scenarios to avoid direct confrontation with guilt. Recommend immediate intervention before subject causes harm to self or others.' She was trying to help you before you killed her.",
        "choices": [
          {
            "text": "Honor her attempt to help by confessing",
            "nextNode": "honor-help"
          },
          {
            "text": "Feel angry that she was analyzing you",
            "nextNode": "analysis-anger"
          },
          {
            "text": "Seek the intervention she recommended",
            "nextNode": "seek-intervention"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      }
    }
  }
};