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
      },
      
      // Now adding all the missing nodes that were referenced but not defined
      
      "vasquez-information": {
        "id": "vasquez-information",
        "text": "Sergeant Williams pulls up the call log. 'Dr. Vasquez said she had evidence of a hit-and-run involving a police officer. She claimed to have video footage and wanted to speak with you specifically about badge number 377. When we asked how she got your badge number, she said the numbers told her.' The pieces are falling into place like a house of cards collapsing.",
        "choices": [
          {
            "text": "Ask to hear the recorded call",
            "nextNode": "recorded-call"
          },
          {
            "text": "Find out if she left any evidence",
            "nextNode": "left-evidence"
          },
          {
            "text": "Confess before more is revealed",
            "nextNode": "preemptive-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "missed-calls": {
        "id": "missed-calls",
        "text": "Your phone records show three missed calls from Dr. Vasquez between 6:15 and 7:10 PM yesterday. The final call was just seven minutes before the accident. She left one voicemail: 'Detective Kane, I know what you're going to do before you do it. The numbers don't lie - 777 represents both destruction and redemption. Please call me. I can help you.' How could she have known?",
        "choices": [
          {
            "text": "Listen to the full voicemail again",
            "nextNode": "full-voicemail"
          },
          {
            "text": "Check if she called anyone else",
            "nextNode": "other-calls"
          },
          {
            "text": "Accept that she somehow predicted it",
            "nextNode": "accept-prediction"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "inquiry-motive": {
        "id": "inquiry-motive",
        "text": "Williams scratches his head. 'She said she'd been having prophetic dreams about a police officer in danger of making a terrible mistake. Said the numbers 3-7-7 and 7-1-7 kept appearing in her visions, along with images of rain and red fabric. Honestly, Kane, we thought she was just another psychic trying to get attention. But then... well, here we are.'",
        "choices": [
          {
            "text": "Investigate her claimed psychic abilities",
            "nextNode": "psychic-investigation"
          },
          {
            "text": "Focus on the factual evidence only",
            "nextNode": "facts-only"
          },
          {
            "text": "Consider if her dreams were real warnings",
            "nextNode": "warning-consideration"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "police-psychologist": {
        "id": "police-psychologist",
        "text": "Dr. Martinez reviews your file with concern. 'Marcus, Dr. Vasquez contacted me two weeks ago about you. She was worried about your psychological profile and recent stress indicators. She believed you were on the verge of a breakdown that could endanger yourself and others. I recommended she contact you directly, but she said the timing had to be perfect - that the numbers would tell her when.' The consultation was legitimate, but her methods were unconventional.",
        "choices": [
          {
            "text": "Ask what specific concerns she raised",
            "nextNode": "specific-concerns"
          },
          {
            "text": "Request immediate psychological evaluation",
            "nextNode": "psych-evaluation"
          },
          {
            "text": "Confess and ask for help",
            "nextNode": "confession-with-help"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "other-officers": {
        "id": "other-officers",
        "text": "Dr. Vasquez's research extended to twelve other officers, all with similar psychological profiles and stress indicators. However, your file shows the most concerning patterns: recent memory lapses, increasing isolation, and what she termed 'pre-traumatic stress indicators.' She believed you were the most likely to experience a complete psychological break. The other officers' files seem almost like a control group for studying you.",
        "choices": [
          {
            "text": "Contact the other officers for support",
            "nextNode": "officer-support"
          },
          {
            "text": "Investigate why you were the primary focus",
            "nextNode": "primary-focus"
          },
          {
            "text": "Accept that you need professional help",
            "nextNode": "accept-help"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "client-investigation": {
        "id": "client-investigation",
        "text": "Dr. Vasquez's client list reveals something disturbing: most of her recent clients were connected to law enforcement or legal cases involving police misconduct. She wasn't just a numerologist - she was building a database of psychological profiles for officers at risk of committing crimes. Your case was her primary research focus, with detailed predictions about when and how you would 'break.'",
        "choices": [
          {
            "text": "Question if she orchestrated events",
            "nextNode": "orchestration-theory"
          },
          {
            "text": "See her as trying to prevent tragedy",
            "nextNode": "prevention-theory"
          },
          {
            "text": "Focus on getting help rather than blame",
            "nextNode": "focus-help"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "coroner-visit": {
        "id": "coroner-visit",
        "text": "At the coroner's office, you discover the horrifying truth: there is no Jane Doe from last night. The body signed out with your badge number was Dr. Vasquez herself, retrieved from the morgue where she'd been brought after the hit-and-run. Security footage shows a figure in a police uniform - your uniform - methodically removing the body at 1 AM. The signature looks like yours, but you have no memory of being there.",
        "choices": [
          {
            "text": "Review the security footage",
            "nextNode": "morgue-footage"
          },
          {
            "text": "Check if your uniform was stolen",
            "nextNode": "stolen-uniform"
          },
          {
            "text": "Accept that you did it unconsciously",
            "nextNode": "unconscious-actions"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "hospital-security": {
        "id": "hospital-security",
        "text": "Hospital security footage confirms your worst nightmare. At 1:15 AM, you appear calm and professional as you present your badge and paperwork to retrieve 'evidence' from the Jane Doe case. The night shift supervisor, half-asleep, doesn't question a police detective's authority. You wheel the body out on a gurney, load it into your patrol car, and drive away. Your actions appear completely deliberate and planned.",
        "choices": [
          {
            "text": "Try to remember planning this",
            "nextNode": "planning-memories"
          },
          {
            "text": "Research dissociative disorders",
            "nextNode": "dissociation-research"
          },
          {
            "text": "Turn yourself in with the evidence",
            "nextNode": "evidence-surrender"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "badge-investigation": {
        "id": "badge-investigation",
        "text": "The badge access logs tell a chilling story. Your badge was used at multiple locations throughout the night: the morgue at 1 AM, Dr. Vasquez's building at 2:47 AM, and a 24-hour hardware store at 4:30 AM where security cameras show you purchasing plastic sheeting and cleaning supplies. Each transaction appears normal, but together they paint the picture of a methodical cover-up you don't remember executing.",
        "choices": [
          {
            "text": "Check what else you bought that night",
            "nextNode": "purchase-history"
          },
          {
            "text": "Investigate if someone cloned your badge",
            "nextNode": "cloned-badge"
          },
          {
            "text": "Accept the psychological explanation",
            "nextNode": "psychological-acceptance"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "partner-break": {
        "id": "partner-break",
        "text": "Your partner, Detective Sarah Chen, studies your face with concern. 'Marcus, you look like you've seen a ghost. Why don't you head home? I'll finish up here.' As you start to leave, she calls out: 'Hey, weird thing - dispatch got a call this morning about a police car parked outside this building around 3 AM. Caller said the officer looked like he was sleepwalking.' The timing matches the security footage perfectly.",
        "choices": [
          {
            "text": "Ask Sarah what else the caller said",
            "nextNode": "caller-details"
          },
          {
            "text": "Confess everything to your partner",
            "nextNode": "partner-confession"
          },
          {
            "text": "Leave before more questions arise",
            "nextNode": "hasty-exit"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "stress-investigation": {
        "id": "stress-investigation",
        "text": "Despite your obvious distress, you push forward with the investigation. But stress is making you sloppy - you contaminate evidence, miss obvious clues, and make basic procedural errors. Other officers start noticing your erratic behavior. Captain Rodriguez pulls you aside: 'Kane, you're acting like someone with something to hide. Either get your head straight or I'm pulling you off this case.'",
        "choices": [
          {
            "text": "Beg to stay on the case",
            "nextNode": "beg-stay"
          },
          {
            "text": "Accept being removed from the case",
            "nextNode": "case-removal"
          },
          {
            "text": "Confess why you're really stressed",
            "nextNode": "stress-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "partner-confession": {
        "id": "partner-confession",
        "text": "You break down and tell Sarah everything - the accident, the memory gaps, finding your own evidence at every turn. She listens without judgment, then says quietly: 'Marcus, I've been your partner for three years. Last night you called me at 2 AM rambling about numbers and destiny, then hung up. I tried calling back but you didn't answer. I think you need help more than you need a lawyer.'",
        "choices": [
          {
            "text": "Ask Sarah to help you turn yourself in",
            "nextNode": "partner-assistance"
          },
          {
            "text": "Beg Sarah to keep your secret",
            "nextNode": "secret-plea"
          },
          {
            "text": "Ask what exactly you said on the phone",
            "nextNode": "phone-call-details"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "submit-evidence": {
        "id": "submit-evidence",
        "text": "You submit the photographs to the evidence locker, effectively documenting your own guilt. The forensics team processes them with professional efficiency, unaware they're sealing your fate. Within hours, the photos become part of the official case file. There's no taking them back now. Sometimes doing the right thing feels like signing your own death warrant.",
        "choices": [
          {
            "text": "Wait for forensics to make the connection",
            "nextNode": "forensics-connection"
          },
          {
            "text": "Confess before they figure it out",
            "nextNode": "preemptive-confession"
          },
          {
            "text": "Try to retrieve the evidence",
            "nextNode": "retrieve-evidence"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "keep-photos": {
        "id": "keep-photos",
        "text": "You keep the damning photos as a twisted form of insurance, unsure what you'll do with them. They burn in your phone like digital acid, each image a reminder of your guilt. Every time you look at your phone, you accidentally glimpse them, sending waves of nausea through your body. The photos become a form of psychological self-torture.",
        "choices": [
          {
            "text": "Eventually submit them to clear your conscience",
            "nextNode": "delayed-submission"
          },
          {
            "text": "Show them to a therapist for help",
            "nextNode": "therapist-photos"
          },
          {
            "text": "Delete them to end the torment",
            "nextNode": "delete-evidence"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "delete-evidence": {
        "id": "delete-evidence",
        "text": "You delete the photos, but digital deletion is rarely permanent. Your phone automatically backed them up to cloud storage, and forensic data recovery could resurrect them at any time. The attempt to erase your crime only adds destruction of evidence to your growing list of offenses. Technology remembers even when we try to forget.",
        "choices": [
          {
            "text": "Try to delete from cloud storage too",
            "nextNode": "cloud-deletion"
          },
          {
            "text": "Accept that deletion is pointless",
            "nextNode": "futile-deletion"
          },
          {
            "text": "Confess before the photos are recovered",
            "nextNode": "confession-before-recovery"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "complete-file": {
        "id": "complete-file",
        "text": "Your complete file reveals Dr. Vasquez's chilling predictions: 'Subject M.K. shows 87% probability of vehicular incident within 30 days, followed by elaborate cover-up attempts. Psychological break likely to manifest as memory suppression and investigative self-sabotage. Recommend immediate intervention.' The date on the report is three weeks ago. She knew exactly what would happen.",
        "choices": [
          {
            "text": "Check how she made such accurate predictions",
            "nextNode": "prediction-method"
          },
          {
            "text": "See if you can prevent the predicted outcome",
            "nextNode": "prevent-prediction"
          },
          {
            "text": "Accept that this was inevitable",
            "nextNode": "accept-inevitability"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "other-files": {
        "id": "other-files",
        "text": "The other officers' files show similar but less severe predictions: 'Officer R.T. - 23% probability of excessive force incident,' 'Detective L.M. - 45% probability of evidence tampering.' But your file stands out dramatically: '87% probability of vehicular homicide with subsequent psychological breakdown.' You were her primary case study, the one she believed was most at risk.",
        "choices": [
          {
            "text": "Warn the other officers about their risks",
            "nextNode": "warn-officers"
          },
          {
            "text": "Focus on your own situation",
            "nextNode": "self-focus"
          },
          {
            "text": "Question the validity of her predictions",
            "nextNode": "question-predictions"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "reporting-contact": {
        "id": "reporting-contact",
        "text": "Hidden in her files is correspondence with Internal Affairs, the FBI, and a local investigative journalist. Dr. Vasquez wasn't working alone - she was building a case against police corruption with help from federal authorities. Your incident was meant to be the centerpiece of a massive investigation into law enforcement psychological screening failures.",
        "choices": [
          {
            "text": "Contact the federal investigators",
            "nextNode": "federal-contact"
          },
          {
            "text": "Try to warn other officers",
            "nextNode": "warn-officers"
          },
          {
            "text": "Cooperate fully with the investigation",
            "nextNode": "full-cooperation"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "consultation-details": {
        "id": "consultation-details",
        "text": "Dr. Vasquez's police consultation was legitimate: she was hired to develop psychological profiles to prevent officer-involved incidents. But she'd been secretly documenting everything, building individual risk assessments for each officer. Your consultation sessions were recorded, and reviewing them now, you can see her leading questions designed to reveal your psychological breaking points.",
        "choices": [
          {
            "text": "Listen to your recorded sessions",
            "nextNode": "session-recordings"
          },
          {
            "text": "Feel betrayed by the deception",
            "nextNode": "betrayal-feelings"
          },
          {
            "text": "Understand she was trying to help",
            "nextNode": "helpful-intent"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "basement-footage": {
        "id": "basement-footage",
        "text": "The basement security footage shows you working with mechanical precision: unwrapping the body, positioning it carefully, then creating the elaborate mannequin scene upstairs. Most disturbing is your expression - completely blank, as if you're sleepwalking through a nightmare. At one point, you stop and stare directly at the camera for thirty seconds, but your eyes show no recognition or awareness.",
        "choices": [
          {
            "text": "Research sleepwalking and crime",
            "nextNode": "sleepwalking-research"
          },
          {
            "text": "Show the footage to a psychiatrist",
            "nextNode": "show-psychiatrist"
          },
          {
            "text": "Accept this as proof of guilt",
            "nextNode": "guilt-proof"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "preemptive-confession": {
        "id": "preemptive-confession",
        "text": "You decide to confess before more evidence surfaces, hoping that voluntary admission might earn some mercy. Walking into the District Attorney's office, you lay out everything: the accident, the cover-up, the memory loss, and your own investigation. The DA listens with growing amazement: 'Detective Kane, in thirty years of prosecution, I've never seen someone build such a thorough case against themselves.'",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      
      "staging-memories": {
        "id": "staging-memories",
        "text": "Forcing yourself to remember the staging, fragments return: the weight of the mannequin, the careful positioning of limbs, the methodical arrangement of evidence. But the memories feel like watching someone else's movie - you can see yourself doing these things, but you can't connect to the emotions or decision-making. It's as if your conscious mind was completely offline.",
        "choices": [
          {
            "text": "Try to understand this dissociation",
            "nextNode": "understand-dissociation"
          },
          {
            "text": "Focus on taking responsibility",
            "nextNode": "take-responsibility"
          },
          {
            "text": "Seek immediate psychiatric help",
            "nextNode": "immediate-psych-help"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "psychological-analysis": {
        "id": "psychological-analysis",
        "text": "Analyzing your psychological state reveals a classic trauma response: dissociative episodes triggered by overwhelming guilt. The mannequin staging wasn't random - it was your mind's attempt to create a 'clean' crime scene that didn't involve vehicular homicide. By creating a murder scene, you psychologically distanced yourself from the accident. The elaborate deception was self-protection, not malice.",
        "choices": [
          {
            "text": "Use this understanding to seek help",
            "nextNode": "understanding-help"
          },
          {
            "text": "Present this analysis to authorities",
            "nextNode": "analysis-presentation"
          },
          {
            "text": "Still accept full responsibility",
            "nextNode": "responsibility-despite-analysis"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "real-scene-search": {
        "id": "real-scene-search",
        "text": "You realize there is no separate 'real' crime scene - the accident on Maple Street was the only crime scene. Everything else was staging to avoid confronting the simple, horrible truth: you killed Dr. Vasquez in a hit-and-run accident and your mind couldn't handle it. The elaborate murder mystery was your psyche's way of avoiding the reality of vehicular homicide.",
        "choices": [
          {
            "text": "Return to Maple Street to face the truth",
            "nextNode": "face-truth-maple"
          },
          {
            "text": "Accept the psychological explanation",
            "nextNode": "accept-psychology"
          },
          {
            "text": "Confess to end the mental torment",
            "nextNode": "torment-ending-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "inevitable-confession": {
        "id": "inevitable-confession",
        "text": "With Mrs. Chen's testimony and all the physical evidence, confession becomes inevitable rather than voluntary. You walk into the station knowing your freedom is already over. Captain Rodriguez sees it in your eyes immediately: 'Kane, you look like a man carrying the weight of the world. What do you need to tell me?' The confession that follows is more relief than devastation.",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      
      "discredit-witness": {
        "id": "discredit-witness",
        "text": "You try to discredit Mrs. Chen by suggesting her eyesight is poor and her memory unreliable. But investigating her background reveals she's a retired forensic accountant with perfect vision and an impeccable reputation. Your attempt to undermine her credibility only makes you look more guilty and desperate. The truth has a way of defending itself.",
        "choices": [
          {
            "text": "Abandon the discrediting strategy",
            "nextNode": "abandon-strategy"
          },
          {
            "text": "Double down on witness challenges",
            "nextNode": "challenge-witnesses"
          },
          {
            "text": "Confess before you dig deeper",
            "nextNode": "deep-hole-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "plan-escape": {
        "id": "plan-escape",
        "text": "You consider fleeing the jurisdiction, but where can a police detective run? Your face is known, your credentials will be flagged, and your guilt would follow you anywhere. As you pack a bag with shaking hands, you realize that running would only prove your guilt while adding 'flight to avoid prosecution' to your charges. Some prisons are internal.",
        "choices": [
          {
            "text": "Go through with the escape plan",
            "nextNode": "execute-escape"
          },
          {
            "text": "Abandon the escape idea",
            "nextNode": "abandon-escape"
          },
          {
            "text": "Turn yourself in instead",
            "nextNode": "surrender-instead"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "fake-backup": {
        "id": "fake-backup",
        "text": "Sergeant Williams assigns Detective Rodriguez to assist you, unaware you're investigating your own crime. Rodriguez reviews the evidence with fresh eyes: 'Kane, this is weird. The physical evidence suggests police involvement, but the crime scene staging seems designed to confuse us. It's like the perpetrator wanted to be caught but couldn't bring himself to confess directly.' His analysis cuts too close to the truth.",
        "choices": [
          {
            "text": "Guide Rodriguez away from the truth",
            "nextNode": "misdirect-partner"
          },
          {
            "text": "Let Rodriguez solve the case",
            "nextNode": "partner-solves"
          },
          {
            "text": "Confess to Rodriguez privately",
            "nextNode": "private-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "williams-confession": {
        "id": "williams-confession",
        "text": "You confess everything to Sergeant Williams, who listens with growing horror and pity. 'Jesus, Kane. Thirty years on the force and I've never seen anything like this. You investigated your own crime so thoroughly you solved it better than we ever could have.' He helps you walk to Captain Rodriguez's office, serving as a witness to your voluntary confession. Sometimes the truth needs an escort.",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      
      "close-case": {
        "id": "close-case",
        "text": "You attempt to close the case as unsolved, but the evidence you've gathered is too compelling to ignore. Other detectives reviewing your file notice the glaring inconsistencies and suspicious gaps in your investigation. Within days, Internal Affairs opens an inquiry into your handling of the case. Trying to bury the truth only ensures it will be exhumed by others.",
        "choices": [
          {
            "text": "Cooperate with Internal Affairs",
            "nextNode": "ia-cooperation"
          },
          {
            "text": "Try to mislead the investigation",
            "nextNode": "mislead-ia"
          },
          {
            "text": "Confess before IA digs deeper",
            "nextNode": "ia-preemptive-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "stop-coverup": {
        "id": "stop-coverup",
        "text": "You realize the cover-up is spiraling beyond control and decide to stop before making things worse. Standing in your apartment surrounded by evidence and lies, you understand that the truth will surface regardless of your efforts. The cover-up has become more elaborate than the original crime. It's time to face what you've done.",
        "choices": [
          {
            "text": "Confess and provide all evidence",
            "nextNode": "full-confession-evidence"
          },
          {
            "text": "Seek legal counsel first",
            "nextNode": "legal-counsel-first"
          },
          {
            "text": "Try to undo the cover-up damage",
            "nextNode": "undo-coverup"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "deeper-deception": {
        "id": "deeper-deception",
        "text": "You dive deeper into deception, creating false witness statements and fabricating evidence to support alternative theories. But each lie requires ten more lies to sustain it. Soon you're maintaining a web of deception so complex that you can't remember which version of events is real. The lies become a labyrinth with no exit.",
        "choices": [
          {
            "text": "Get lost in your own lies",
            "nextNode": "lost-in-lies"
          },
          {
            "text": "Try to map out all the deceptions",
            "nextNode": "map-deceptions"
          },
          {
            "text": "Confess to end the confusion",
            "nextNode": "confusion-ending-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "damage-control": {
        "id": "damage-control",
        "text": "You attempt damage control by confessing to the accident while minimizing the cover-up, claiming temporary insanity and memory loss. But the evidence of premeditated staging contradicts your claims of unconscious behavior. The DA sees through the selective confession: 'Detective Kane, you can't claim insanity for convenient parts of your crime while taking credit for the brilliant investigative work.'",
        "choices": [
          {
            "text": "Provide a complete, honest confession",
            "nextNode": "complete-honest-confession"
          },
          {
            "text": "Stick to the partial confession",
            "nextNode": "partial-confession-strategy"
          },
          {
            "text": "Claim everything was unconscious behavior",
            "nextNode": "full-unconscious-claim"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "therapy-commitment": {
        "id": "therapy-commitment",
        "text": "You commit to intensive therapy with Dr. Martinez, working through the trauma and guilt that led to your breakdown. Through months of treatment, you develop coping mechanisms and gain insight into your psychological state. The therapy helps, but it can't undo what you've done. Healing is possible, but justice is still necessary.",
        "choices": [
          {
            "text": "Use therapy insights to confess responsibly",
            "nextNode": "therapeutic-confession"
          },
          {
            "text": "Focus on rehabilitation over punishment",
            "nextNode": "rehabilitation-focus"
          },
          {
            "text": "Balance therapy with legal accountability",
            "nextNode": "balanced-approach"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "insanity-defense": {
        "id": "insanity-defense",
        "text": "You pursue an insanity defense, claiming your dissociative state absolves you of criminal responsibility. But the defense falls apart when prosecutors demonstrate the methodical planning involved in your cover-up. The jury sees someone who was mentally ill, not legally insane. Mental health explains behavior; it doesn't excuse crime.",
        "choices": [
          {
            "text": "Accept the verdict gracefully",
            "nextNode": "graceful-acceptance"
          },
          {
            "text": "Appeal based on mental health",
            "nextNode": "mental-health-appeal"
          },
          {
            "text": "Change plea to guilty with explanation",
            "nextNode": "guilty-with-explanation"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "reject-diagnosis": {
        "id": "reject-diagnosis",
        "text": "You reject the psychological diagnosis, insisting you were fully aware and in control of your actions. This makes you look worse legally - premeditated murder and cover-up rather than a trauma response. By refusing to accept mental health explanations, you've eliminated any possibility of mercy or understanding from the court.",
        "choices": [
          {
            "text": "Maintain your stance of full responsibility",
            "nextNode": "full-responsibility-stance"
          },
          {
            "text": "Reconsider the psychological explanation",
            "nextNode": "reconsider-psychology"
          },
          {
            "text": "Accept whatever punishment comes",
            "nextNode": "accept-punishment"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "accept-treatment": {
        "id": "accept-treatment",
        "text": "You accept psychiatric treatment while also cooperating with the legal process. The treatment helps you understand your actions without excusing them. Dr. Martinez testifies about your dissociative state while you take full responsibility for the consequences. It's possible to be both mentally ill and criminally responsible.",
        "choices": [
          {
            "text": "Use treatment to become a better person",
            "nextNode": "become-better"
          },
          {
            "text": "Advocate for other officers' mental health",
            "nextNode": "advocate-others"
          },
          {
            "text": "Focus on making amends to victims' families",
            "nextNode": "make-amends"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "legal-focus": {
        "id": "legal-focus",
        "text": "You focus on legal implications rather than psychological healing, hiring the best defense attorney money can buy. But the evidence is overwhelming, and your attorney's strategy of attacking procedure and evidence only makes you look more guilty. Sometimes the best legal strategy is simply telling the truth and accepting consequences.",
        "choices": [
          {
            "text": "Fire your attorney and represent yourself",
            "nextNode": "self-representation"
          },
          {
            "text": "Change strategy to plea bargain",
            "nextNode": "plea-bargain"
          },
          {
            "text": "Accept that legal maneuvering won't help",
            "nextNode": "accept-legal-reality"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "question-diagnosis": {
        "id": "question-diagnosis",
        "text": "You question the validity of the psychiatric diagnosis, wondering if it's just an excuse for inexcusable behavior. Dr. Martinez responds: 'Marcus, understanding why something happened doesn't make it okay that it happened. Mental illness explains your actions; it doesn't justify them. You're still responsible for the harm you've caused.'",
        "choices": [
          {
            "text": "Accept responsibility despite mental illness",
            "nextNode": "responsible-despite-illness"
          },
          {
            "text": "Seek a second psychiatric opinion",
            "nextNode": "second-psychiatric-opinion"
          },
          {
            "text": "Focus on making things right somehow",
            "nextNode": "make-things-right"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "emails-send": {
        "id": "emails-send",
        "text": "You allow Dr. Vasquez's scheduled emails to send automatically. Within hours, the entire police department is rocked by revelations of corruption, cover-ups, and psychological screening failures. Your case becomes the centerpiece of a massive federal investigation. Dozens of officers are suspended, careers are destroyed, but justice is finally served. Sometimes the truth demands a high price from everyone.",
        "choices": [
          {
            "text": "Cooperate fully with the federal investigation",
            "nextNode": "federal-cooperation"
          },
          {
            "text": "Try to minimize damage to fellow officers",
            "nextNode": "minimize-damage"
          },
          {
            "text": "Accept your role in exposing corruption",
            "nextNode": "accept-whistleblower-role"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "stop-emails": {
        "id": "stop-emails",
        "text": "You frantically try to stop the email system, but Dr. Vasquez designed it to be tamper-proof. Your attempts to access her computer only trigger additional security protocols, sending immediate alerts to backup recipients. By trying to stop the truth, you've accelerated its release. The cover-up of the cover-up becomes the final piece of evidence against you.",
        "choices": [
          {
            "text": "Confess before the emails fully deploy",
            "nextNode": "pre-deployment-confession"
          },
          {
            "text": "Prepare for the inevitable exposure",
            "nextNode": "prepare-exposure"
          },
          {
            "text": "Try to destroy the computer entirely",
            "nextNode": "destroy-computer"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "warn-officers": {
        "id": "warn-officers",
        "text": "You warn the other officers about Dr. Vasquez's investigation, but this only creates a conspiracy to obstruct justice. Several officers flee, others destroy evidence, and the entire department falls under federal scrutiny. Your attempt to protect colleagues has made everyone look guilty and turned a single incident into a department-wide scandal.",
        "choices": [
          {
            "text": "Take responsibility for creating the panic",
            "nextNode": "panic-responsibility"
          },
          {
            "text": "Try to convince officers to surrender",
            "nextNode": "convince-surrender"
          },
          {
            "text": "Distance yourself from the conspiracy",
            "nextNode": "distance-conspiracy"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "negotiate-maria": {
        "id": "negotiate-maria",
        "text": "You meet Maria at a coffee shop to negotiate, but she's not interested in deals. 'Dr. Vasquez taught me that justice isn't negotiable,' she says, showing you a tablet with all the evidence ready to upload. 'She predicted you'd try to bargain your way out. The only negotiation she'd accept is full confession and cooperation with authorities.'",
        "choices": [
          {
            "text": "Accept her terms and confess",
            "nextNode": "accept-terms-confess"
          },
          {
            "text": "Try to convince her to show mercy",
            "nextNode": "plead-mercy"
          },
          {
            "text": "Threaten Maria to stop the release",
            "nextNode": "threaten-maria"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "report-maria": {
        "id": "report-maria",
        "text": "You report Maria for harassment, but this backfires spectacularly. When investigators interview her, she provides all of Dr. Vasquez's evidence as justification for her actions. Your harassment complaint becomes the vehicle for exposing your crimes. Maria thanks you: 'I was wondering how to get this evidence to authorities. You've solved that problem for me.'",
        "choices": [
          {
            "text": "Try to withdraw the complaint",
            "nextNode": "withdraw-complaint"
          },
          {
            "text": "Confess before investigation deepens",
            "nextNode": "investigation-preemptive-confession"
          },
          {
            "text": "Claim Maria fabricated everything",
            "nextNode": "claim-fabrication"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "partial-admission": {
        "id": "partial-admission",
        "text": "You admit to the cover-up while claiming the accident was unavoidable. Maria nods sadly: 'Dr. Vasquez predicted you'd try this - taking responsibility for parts of your crime while denying others. She said guilt makes people become lawyers for their own actions, arguing technicalities instead of accepting truth.'",
        "choices": [
          {
            "text": "Stop making excuses and fully confess",
            "nextNode": "stop-excuses-confess"
          },
          {
            "text": "Maintain that the accident was unavoidable",
            "nextNode": "maintain-accident-claim"
          },
          {
            "text": "Ask what Dr. Vasquez really predicted",
            "nextNode": "ask-predictions"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "insanity-claim": {
        "id": "insanity-claim",
        "text": "You claim temporary insanity, but Maria shows you more footage: you stopping for coffee after the accident, calmly purchasing supplies, methodically planning each step. 'Insane people don't buy extra plastic sheeting just in case,' she observes. 'Dr. Vasquez said you'd claim mental illness to avoid moral responsibility.'",
        "choices": [
          {
            "text": "Abandon the insanity defense",
            "nextNode": "abandon-insanity"
          },
          {
            "text": "Argue that planning can be unconscious",
            "nextNode": "unconscious-planning"
          },
          {
            "text": "Accept that you were fully responsible",
            "nextNode": "accept-full-responsibility"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "full-responsibility": {
        "id": "full-responsibility",
        "text": "You accept full responsibility without excuses or explanations. Maria's expression softens: 'Dr. Vasquez said that if you ever reached this point - true accountability without self-justification - then you might be worth saving. She believed everyone deserves a chance at redemption, but only after they stop running from the truth.'",
        "choices": [
          {
            "text": "Ask Maria to help you turn yourself in",
            "nextNode": "maria-assistance"
          },
          {
            "text": "Thank Dr. Vasquez for her wisdom",
            "nextNode": "thank-vasquez"
          },
          {
            "text": "Walk to the police station together",
            "nextNode": "walk-station-together"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "maintain-lie": {
        "id": "maintain-lie",
        "text": "You maintain the lie despite growing suspicion, but the coroner's experience makes her a formidable opponent. She begins her own investigation, consulting with forensic experts and reviewing every detail. Within days, her report conclusively proves the body was moved post-mortem. Your lie has only delayed the inevitable while destroying your credibility.",
        "choices": [
          {
            "text": "Come clean before the report is finalized",
            "nextNode": "report-preemption"
          },
          {
            "text": "Try to discredit the coroner's findings",
            "nextNode": "discredit-coroner"
          },
          {
            "text": "Accept that the truth will come out",
            "nextNode": "accept-truth-emergence"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "breakdown-confession": {
        "id": "breakdown-confession",
        "text": "You break down completely under the coroner's gentle questioning, confessing everything through tears. She listens with professional compassion: 'Detective Kane, in forty years of forensic pathology, I've learned that the truth always emerges. I'm glad you found the courage to tell it before it destroyed you completely.'",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      
      "legal-representation": {
        "id": "legal-representation",
        "text": "You request legal representation, which immediately raises red flags with the coroner and investigating officers. By lawyering up during a routine consultation, you've essentially announced your guilt. Your attorney arrives to find a case where the evidence is overwhelming and the client's behavior has already damaged any possible defense.",
        "choices": [
          {
            "text": "Follow your attorney's advice to stay silent",
            "nextNode": "stay-silent"
          },
          {
            "text": "Confess despite attorney's objections",
            "nextNode": "confess-despite-lawyer"
          },
          {
            "text": "Try to negotiate a plea deal",
            "nextNode": "negotiate-plea"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "preventive-confession": {
        "id": "preventive-confession",
        "text": "You confess before the coroners can connect more dots, hoping to control the narrative. But your timing looks suspicious - confessing only after forensic evidence emerges makes you appear calculating rather than remorseful. True confession requires honesty about timing as well as actions.",
        "choices": [
          {
            "text": "Explain why you waited to confess",
            "nextNode": "explain-timing"
          },
          {
            "text": "Accept that timing affects credibility",
            "nextNode": "accept-timing-issues"
          },
          {
            "text": "Focus on helping investigators understand",
            "nextNode": "help-investigators"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "frame-colleague": {
        "id": "frame-colleague",
        "text": "In desperation, you try to frame another officer, planting evidence and creating false leads. But your knowledge of police procedure makes your frame-up too perfect, too convenient. Investigators see through the deception immediately, and now you're facing additional charges for evidence tampering and attempting to frame an innocent person.",
        "choices": [
          {
            "text": "Confess to the framing attempt",
            "nextNode": "confess-framing"
          },
          {
            "text": "Try to maintain the deception",
            "nextNode": "maintain-frame"
          },
          {
            "text": "Break down from the pressure",
            "nextNode": "pressure-breakdown"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "contamination-claim": {
        "id": "contamination-claim",
        "text": "You claim the evidence is contaminated, but forensics has maintained perfect chain of custody. Your contamination claims only make you look more desperate and damage your credibility further. The evidence is solid, the procedures were followed, and your objections appear to be the desperate grasping of a guilty person.",
        "choices": [
          {
            "text": "Drop the contamination claims",
            "nextNode": "drop-claims"
          },
          {
            "text": "Hire an expert to challenge forensics",
            "nextNode": "hire-expert"
          },
          {
            "text": "Accept that the evidence is valid",
            "nextNode": "accept-evidence-validity"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "psychological-acceptance": {
        "id": "psychological-acceptance",
        "text": "You accept the psychological explanation for your behavior - dissociative episodes triggered by extreme guilt and trauma. This understanding doesn't excuse your actions but helps explain them. With this self-knowledge, you can approach confession and consequences with greater clarity about what happened and why.",
        "choices": [
          {
            "text": "Use this understanding to confess responsibly",
            "nextNode": "responsible-confession"
          },
          {
            "text": "Seek treatment while accepting legal consequences",
            "nextNode": "treatment-and-consequences"
          },
          {
            "text": "Help others understand similar psychological states",
            "nextNode": "help-others-understand"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "immediate-help": {
        "id": "immediate-help",
        "text": "You seek immediate professional help, checking yourself into a psychiatric facility for evaluation and treatment. The voluntary commitment demonstrates recognition of your mental health crisis, but it doesn't absolve you of legal responsibility. Healing and justice must proceed on parallel tracks.",
        "choices": [
          {
            "text": "Cooperate with both treatment and legal process",
            "nextNode": "dual-cooperation"
          },
          {
            "text": "Focus on recovery first, legal issues later",
            "nextNode": "recovery-first"
          },
          {
            "text": "Use treatment insights to make amends",
            "nextNode": "treatment-amends"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "understanding-confession": {
        "id": "understanding-confession",
        "text": "Armed with psychological understanding of your actions, you confess with clarity about both what you did and why you did it. This complete honesty - acknowledging both criminal behavior and mental health factors - provides the most complete truth possible. Understanding enhances accountability rather than diminishing it.",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      
      "abandon-challenge": {
        "id": "abandon-challenge",
        "text": "You abandon the evidence challenge strategy, realizing it only makes you look guilty and desperate. But the damage is done - your attempts to discredit solid forensics have drawn additional scrutiny to every aspect of the case. Sometimes backing down from a bad strategy doesn't undo the harm it's already caused.",
        "choices": [
          {
            "text": "Apologize for wasting everyone's time",
            "nextNode": "apologize-waste"
          },
          {
            "text": "Explain why you challenged the evidence",
            "nextNode": "explain-challenge"
          },
          {
            "text": "Confess to end the elaborate charade",
            "nextNode": "charade-ending-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "double-down": {
        "id": "double-down",
        "text": "You double down on contamination claims, hiring expensive experts to challenge every piece of evidence. But your experts find the forensic work flawless and the evidence overwhelming. Your expensive challenge has only confirmed your guilt more thoroughly while bankrupting yourself in the process.",
        "choices": [
          {
            "text": "Accept your experts' conclusions",
            "nextNode": "accept-expert-conclusions"
          },
          {
            "text": "Fire the experts and find new ones",
            "nextNode": "fire-experts"
          },
          {
            "text": "Realize the futility of fighting solid evidence",
            "nextNode": "realize-futility"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "evidence-confession": {
        "id": "evidence-confession",
        "text": "You confess before more evidence emerges, hoping to maintain some control over the narrative. But confession after evidence challenges makes your admission look forced rather than voluntary. True remorse requires honesty from the beginning, not strategic admission after other options are exhausted.",
        "choices": [
          {
            "text": "Acknowledge the confession looks forced",
            "nextNode": "acknowledge-forced"
          },
          {
            "text": "Explain your decision-making process",
            "nextNode": "explain-decision"
          },
          {
            "text": "Focus on being completely honest going forward",
            "nextNode": "honest-going-forward"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "polygraph-confession": {
        "id": "polygraph-confession",
        "text": "After failing the polygraph so dramatically, you confess everything. The polygraph examiner nods: 'Detective Kane, I've never seen someone's guilt manifest so physically. Your body was trying to tell the truth even when your mind resisted. This confession is more relief than revelation.'",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      
      "machine-malfunction": {
        "id": "machine-malfunction",
        "text": "You claim the polygraph machine malfunctioned, but this only makes you look more desperate. The examiner responds: 'Detective, I've administered thousands of these tests. The machine worked perfectly - your nervous system was just overwhelmed by guilt. Claiming equipment failure won't change your physiological responses to deception.'",
        "choices": [
          {
            "text": "Accept the polygraph results",
            "nextNode": "accept-polygraph"
          },
          {
            "text": "Request a different type of evaluation",
            "nextNode": "different-evaluation"
          },
          {
            "text": "Confess that guilt caused the reactions",
            "nextNode": "guilt-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "psych-evaluation": {
        "id": "psych-evaluation",
        "text": "You request a psychological evaluation, which reveals severe trauma responses and dissociative episodes. The psychologist concludes: 'Your mental state explains your actions but doesn't excuse them. You need treatment, but you also need to face legal consequences. Mental illness and criminal responsibility can coexist.'",
        "choices": [
          {
            "text": "Accept both treatment and legal consequences",
            "nextNode": "accept-both"
          },
          {
            "text": "Focus primarily on mental health treatment",
            "nextNode": "mental-health-focus"
          },
          {
            "text": "Use evaluation to seek reduced charges",
            "nextNode": "seek-reduced-charges"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "karmic-confession": {
        "id": "karmic-confession",
        "text": "You confess as part of accepting karmic balance, seeing your admission as cosmic justice working through human actions. Captain Rodriguez listens to your numerologically-framed confession with bewilderment: 'Kane, I don't understand your spiritual interpretation, but I understand your guilt. The numbers may have guided you here, but you still chose to tell the truth.'",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      
      "spiritual-guidance": {
        "id": "spiritual-guidance",
        "text": "You seek spiritual guidance from a numerologist who knew Dr. Vasquez. She tells you: 'Elena believed that numbers reveal truth but don't determine action. The universe showed you the path to redemption through 377 and 777, but walking that path is your choice. Confession is the first step toward karmic balance.'",
        "choices": [
          {
            "text": "Follow the spiritual path to confession",
            "nextNode": "spiritual-confession"
          },
          {
            "text": "Combine spiritual and legal approaches",
            "nextNode": "combined-approach"
          },
          {
            "text": "Thank her but handle this yourself",
            "nextNode": "handle-yourself"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "karmic-letter": {
        "id": "karmic-letter",
        "text": "You write a confession letter citing karmic debt and numerical synchronicity. The letter is beautiful in its own way, but investigators are more interested in facts than philosophy. Your spiritual interpretation of guilt is valid personally, but justice systems deal in evidence and actions, not cosmic balance.",
        "choices": [
          {
            "text": "Rewrite the confession with factual focus",
            "nextNode": "factual-confession"
          },
          {
            "text": "Deliver both versions - spiritual and legal",
            "nextNode": "both-versions"
          },
          {
            "text": "Stand by your spiritual interpretation",
            "nextNode": "stand-by-spiritual"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "obsession-therapy": {
        "id": "obsession-therapy",
        "text": "You seek therapy for obsessive thoughts about numbers, but the therapist recognizes the deeper issue: 'The numbers aren't the problem, Marcus. They're symbols of your guilt. We can't treat the symptoms while ignoring the cause. You need to address what you've done, not just how you're processing it.'",
        "choices": [
          {
            "text": "Address the underlying guilt directly",
            "nextNode": "address-guilt"
          },
          {
            "text": "Continue focusing on symptom management",
            "nextNode": "symptom-focus"
          },
          {
            "text": "Confess as part of therapeutic process",
            "nextNode": "therapeutic-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "number-avoidance": {
        "id": "number-avoidance",
        "text": "You try to avoid all numbers, but this is impossible in modern life. Digital clocks, license plates, addresses, prices - numbers are everywhere. Your avoidance becomes so extreme that you can barely function, calling in sick from work and isolating yourself at home. The numbers haven't caused your problems; guilt has.",
        "choices": [
          {
            "text": "Recognize that avoidance isn't working",
            "nextNode": "avoidance-futility"
          },
          {
            "text": "Seek professional help for the obsession",
            "nextNode": "obsession-help"
          },
          {
            "text": "Confess to end the mental torture",
            "nextNode": "mental-torture-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "torment-confession": {
        "id": "torment-confession",
        "text": "You confess to stop the mental torment of seeing accusatory numbers everywhere. The confession brings immediate psychological relief - the numbers lose their power once you've acknowledged the truth they represent. Guilt was the real tormentor; the numbers were just messengers.",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      
      "honor-help": {
        "id": "honor-help",
        "text": "You decide to honor Dr. Vasquez's attempt to help you by confessing voluntarily. Walking into the police station, you carry her psychological profile of you, using her insights to explain your actions. In death, she becomes your guide to redemption. Her final gift was showing you the path to truth.",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      
      "analysis-anger": {
        "id": "analysis-anger",
        "text": "You feel angry that Dr. Vasquez was analyzing you without permission, but this anger is misdirected. She wasn't violating your privacy; she was trying to prevent tragedy. Your anger is really guilt turned outward, blaming the messenger instead of accepting the message. She died trying to help you.",
        "choices": [
          {
            "text": "Recognize the anger is misdirected",
            "nextNode": "recognize-misdirection"
          },
          {
            "text": "Channel anger into motivation for change",
            "nextNode": "channel-anger"
          },
          {
            "text": "Confess to honor her memory properly",
            "nextNode": "honor-memory-confession"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      "seek-intervention": {
        "id": "seek-intervention",
        "text": "You seek the psychological intervention Dr. Vasquez recommended, checking yourself into a mental health facility. The treatment helps you understand your behavior, but it can't change what you've done. Intervention works best before tragedy, not after. Still, it's never too late to choose healing over destruction.",
        "choices": [
          {
            "text": "Complete treatment then face legal consequences",
            "nextNode": "treatment-then-legal"
          },
          {
            "text": "Integrate treatment with legal process",
            "nextNode": "integrated-approach"
          },
          {
            "text": "Use treatment insights to help others",
            "nextNode": "help-others"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      
      // Final ending nodes that were missing
      
      "federal-cooperation": {
        "id": "federal-cooperation",
        "text": "You cooperate fully with federal investigators, helping expose the systemic problems that led to your breakdown. Your case becomes a catalyst for police reform and better psychological screening. Though you face serious charges, your cooperation helps prevent similar tragedies. Sometimes destruction can lead to reconstruction.",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      
      "treatment-then-legal": {
        "id": "treatment-then-legal",
        "text": "After completing intensive psychological treatment, you surrender to face legal consequences with a clearer understanding of your actions. The court recognizes your voluntary treatment and genuine remorse. You receive a sentence that balances justice with recognition of your mental health journey and cooperation.",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      
      "walk-station-together": {
        "id": "walk-station-together",
        "text": "You and Maria walk to the police station together. She holds Dr. Vasquez's research files while you carry the weight of truth. At the station entrance, Maria says: 'Dr. Vasquez would be proud. She believed everyone could find their way to the truth if the numbers guided them correctly.' Your voluntary confession, witnessed by someone who cared about the victim, represents the best possible resolution to an irreversible tragedy.",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      }
    }
  }
};
