// Auto-generated stories for web deployment
export const webStories = {
  "tmwktl": {
    "id": "tmwktl",
    "title": "The Man Who Knew Too Little",
    "description": "Detective Miles Corbin is thrown into a waking nightmare when the evidence in his latest murder case—the victim is an art dealer with a shady past—points overwhelmingly to himself. As he battles the chilling possibility that he committed the crime in a blackout rage, Miles races to uncover the truth. His desperate investigation unearths a long-buried secret: an estranged identical twin whose meticulous act of malice has turned the detective's life and reputation into the ultimate target.",
    "startNode": "discovery-of-evidence",
    "nodes": {
      "discovery-of-evidence": {
        "id": "discovery-of-evidence",
        "text": "The fluorescent hum of the precinct lights was a familiar lullaby to Detective Miles Corbin. Tonight, however, it was a screeching dissonance, a prelude to a nightmare he was struggling to wake from. The victim was Arthur Jenkins, a small-time art dealer with a penchant for shady dealings. The murder weapon, an ornate letter opener, was found clutched in Jenkins' dead hand. And the fingerprints? Miles's own.\n\nHe stared at the evidence report, the cold, hard facts screaming betrayal. His partner, Detective Harding, a man whose jaded eyes had seen it all, watched him with a mixture of pity and professional detachment. \"Miles,\" Harding's voice was a gravelly whisper, \"we need to talk.\"",
        "choices": [
          {
            "text": "Confess everything to Harding immediately",
            "nextNode": "confession-path"
          },
          {
            "text": "Deny involvement and demand to see all the evidence",
            "nextNode": "denial-investigation"
          },
          {
            "text": "Ask for time to think and review the case yourself",
            "nextNode": "self-investigation"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "confession-path": {
        "id": "confession-path",
        "text": "Miles felt the weight of the evidence crushing down on him. \"Maybe I did it,\" he whispered, his voice breaking. \"I was drunk that night, fighting with my ex. I don't remember everything clearly.\"\n\nHarding's expression hardened. \"Miles, if you're confessing, I need to read you your rights. This changes everything.\" The words hit like a physical blow, and Miles realized he might have just sealed his fate with his honesty.",
        "choices": [
          {
            "text": "Take back the confession and fight the charges",
            "nextNode": "retraction-struggle"
          },
          {
            "text": "Accept responsibility and face the consequences",
            "nextNode": "guilty-ending"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "denial-investigation": {
        "id": "denial-investigation",
        "text": "\"This is impossible,\" Miles said firmly. \"I didn't kill Jenkins. There has to be another explanation.\" Harding pushed a photograph across the desk - a grainy surveillance shot from a liquor store near the crime scene, showing a man in a dark hoodie who looked exactly like Miles.\n\n\"This was taken at 11:17 PM,\" Harding said. \"You were seen leaving the liquor store, heading towards the gallery.\" Miles stared at the image, his blood running cold. He didn't remember any of it.",
        "choices": [
          {
            "text": "Mention your estranged twin brother Marcus",
            "nextNode": "twin-revelation"
          },
          {
            "text": "Insist the surveillance footage must be doctored",
            "nextNode": "footage-challenge"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "self-investigation": {
        "id": "self-investigation",
        "text": "\"I need some time to process this,\" Miles said carefully. \"Give me access to the case files. If I'm going down for this, I want to understand exactly what happened.\" Harding nodded reluctantly, understanding his partner's need for answers.\n\nAlone in the evidence room, Miles pored over every detail. The fingerprints were definitely his, but something felt wrong. The positioning, the way they were found on the murder weapon - it all seemed too convenient, too perfect.",
        "choices": [
          {
            "text": "Focus on the timeline and your whereabouts that night",
            "nextNode": "timeline-analysis"
          },
          {
            "text": "Examine the crime scene photos for inconsistencies",
            "nextNode": "crime-scene-details"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "twin-revelation": {
        "id": "twin-revelation",
        "text": "\"I have a twin brother,\" Miles blurted out, the words tasting like ash in his mouth. \"Marcus. We're estranged, but we look identical.\" Harding raised an eyebrow in surprise.\n\n\"You never mentioned a twin.\" Miles explained how Marcus had always chosen a darker path, becoming a con artist and chameleon who disappeared and reappeared at will. A flicker of hope ignited within Miles - if anyone could have framed him perfectly, it would be Marcus.",
        "choices": [
          {
            "text": "Begin tracking down Marcus's whereabouts",
            "nextNode": "marcus-hunt"
          },
          {
            "text": "Search for evidence that Marcus was involved",
            "nextNode": "twin-evidence-search"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "marcus-hunt": {
        "id": "marcus-hunt",
        "text": "The next few days became a desperate race against time. Miles, fighting for his freedom and identity, tracked down Marcus's old associates. He found them in dive bars and seedy apartments - men and women who spoke of Marcus's cunning and his ability to mimic and disappear.\n\nA weary-eyed bartender remembered seeing Marcus bragging about a \"big score\" involving an art dealer just a week before the murder. The pieces began clicking into place, forming a disturbing mosaic of betrayal and meticulous planning.",
        "choices": [
          {
            "text": "Confront Marcus directly at his last known location",
            "nextNode": "final-confrontation"
          },
          {
            "text": "Gather more evidence before making a move",
            "nextNode": "evidence-building"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "final-confrontation": {
        "id": "final-confrontation",
        "text": "Miles found Marcus in a dingy apartment on the outskirts of the city. His twin sat on a stained sofa, smirking, a half-empty bottle of whiskey at his feet. \"Took you long enough, brother,\" Marcus slurred. \"I almost thought you'd take the fall. Would have been quite poetic, wouldn't it?\"\n\nRage surged through Miles as the truth became clear. Marcus had meticulously planned this frame-up, using their identical appearance and Miles's fingerprints to destroy his brother's life. The confrontation that followed was brutal - a clash of brothers, of light and shadow.",
        "choices": [
          {
            "text": "Fight Marcus and try to subdue him yourself",
            "nextNode": "brothers-fight"
          },
          {
            "text": "Call for backup and let the law handle Marcus",
            "nextNode": "legal-resolution"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "brothers-fight": {
        "id": "brothers-fight",
        "text": "Miles lunged at Marcus, years of betrayal and rage fueling his attack. The fight was vicious and personal, two identical men locked in combat. Just as Marcus gained the upper hand, Harding and a team of officers burst through the door.\n\nMarcus was apprehended, and the overwhelming evidence Miles had gathered - confessions from associates, physical evidence, and Marcus's own boastful admissions - sealed his fate. As Marcus was led away in handcuffs, he met Miles's gaze with no remorse, only triumph. \"You'll never truly be free, Miles,\" he whispered. \"I'll always be a part of you.\"",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      "legal-resolution": {
        "id": "legal-resolution",
        "text": "Miles stepped back and called for backup, choosing to let justice take its course rather than giving in to vengeance. When Harding and the officers arrived, Marcus surrendered with a cold smile, almost as if he'd expected this outcome.\n\nThe evidence was overwhelming, and Marcus's confession came easily - he seemed proud of his elaborate scheme. Miles was cleared completely, his name restored, but the experience had changed him forever. He had stared into the abyss of his own potential guilt and emerged with a deeper understanding of human darkness.",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      },
      "retraction-struggle": {
        "id": "retraction-struggle",
        "text": "\"Wait, I take it back,\" Miles said desperately. \"I was confused, scared. I didn't kill Jenkins.\" But the damage was done. His confession, even retracted, cast doubt on everything. Harding looked at him with disappointment.\n\nWithout concrete evidence to support his innocence and with his own confession on record, Miles found himself fighting an uphill battle. The case against him grew stronger, and his credibility as a detective crumbled. Even when he mentioned Marcus, it seemed like a desperate attempt to shift blame.",
        "choices": [],
        "isEnding": true,
        "endingType": "bad"
      },
      "guilty-ending": {
        "id": "guilty-ending",
        "text": "Miles accepted his fate, believing he truly was guilty of murder. He pled guilty to the charges, convinced that his blackout had hidden the truth from even himself. Only months later, when Marcus was caught in another con, did the real truth emerge.\n\nBy then it was too late. Miles had already been sentenced, his career destroyed, his life in ruins. The revelation that he had been innocent all along was a cruel twist of fate - justice delayed became justice denied.",
        "choices": [],
        "isEnding": true,
        "endingType": "bad"
      },
      "twin-evidence-search": {
        "id": "twin-evidence-search",
        "text": "Miles returned to the crime scene with fresh eyes, searching for evidence that Marcus had been there. In the alley behind the gallery, he found small details the official investigation had missed: a half-smoked cigarette butt of Marcus's favored brand, and the faint scent of cheap cologne that his twin always wore.\n\nThese weren't the things an official report would note, but for Miles, they were beacons of truth pointing toward his brother's involvement.",
        "choices": [
          {
            "text": "Present this evidence to Harding immediately",
            "nextNode": "evidence-presentation"
          },
          {
            "text": "Continue investigating to build a stronger case",
            "nextNode": "marcus-hunt"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "evidence-presentation": {
        "id": "evidence-presentation",
        "text": "Miles brought his findings to Harding - the cigarette, the cologne traces, and his theory about Marcus. Harding was skeptical at first, but agreed to investigate. However, the evidence was circumstantial, and without Marcus in custody, it wasn't enough to clear Miles completely.\n\nThe case remained open, with Miles suspended pending further investigation. He lived in limbo, neither cleared nor convicted, his reputation tarnished and his future uncertain.",
        "choices": [],
        "isEnding": true,
        "endingType": "neutral"
      },
      "timeline-analysis": {
        "id": "timeline-analysis",
        "text": "Miles reconstructed his movements that night meticulously. He remembered the fight with his ex, the bar he'd visited, stumbling home drunk. But there were gaps - periods where his memory was foggy from alcohol.\n\nThe timeline showed he could have committed the murder, but it also revealed inconsistencies. The surveillance footage showed someone leaving the liquor store, but Miles had no memory of buying alcohol that night. Either his memory was completely gone, or someone else was wearing his face.",
        "choices": [
          {
            "text": "Investigate who else could have been impersonating you",
            "nextNode": "twin-revelation"
          },
          {
            "text": "Accept that you might have committed the crime while blackout drunk",
            "nextNode": "guilty-ending"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "crime-scene-details": {
        "id": "crime-scene-details",
        "text": "Studying the crime scene photos revealed subtle inconsistencies. The fingerprints on the murder weapon seemed too perfectly placed, as if they had been deliberately positioned. The blood spatter patterns didn't quite match what would be expected from the struggle described in the initial report.\n\nMost telling was a small detail in the background of one photo - a reflection in a mirror showing a figure that didn't quite match the official timeline of events.",
        "choices": [
          {
            "text": "Confront the forensics team about these inconsistencies",
            "nextNode": "forensics-challenge"
          },
          {
            "text": "Use these findings to search for alternative suspects",
            "nextNode": "twin-revelation"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "forensics-challenge": {
        "id": "forensics-challenge",
        "text": "Miles brought his concerns to the forensics team, but they dismissed his observations as the desperate grasping of a guilty man trying to avoid conviction. The inconsistencies he noticed were explained away or deemed irrelevant.\n\nWithout support from his colleagues and with mounting evidence against him, Miles found himself increasingly isolated. The system he had served faithfully was now working against him, and his protests fell on deaf ears.",
        "choices": [],
        "isEnding": true,
        "endingType": "bad"
      },
      "footage-challenge": {
        "id": "footage-challenge",
        "text": "\"This footage has to be fake,\" Miles insisted. \"Someone doctored it to frame me.\" But Harding shook his head - the technical analysis showed no signs of tampering. The timestamp was legitimate, and the image quality was consistent with the store's security system.\n\nMiles's insistence that the footage was fake only made him look more desperate and guilty. Without other evidence to support his claims, his credibility continued to erode.",
        "choices": [
          {
            "text": "Admit you might be wrong and search for other explanations",
            "nextNode": "twin-revelation"
          },
          {
            "text": "Continue to maintain the footage is fake despite the evidence",
            "nextNode": "stubborn-denial"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "stubborn-denial": {
        "id": "stubborn-denial",
        "text": "Miles refused to accept the evidence, continuing to claim the footage was doctored and the fingerprints were planted. His increasingly erratic behavior and refusal to consider any possibility of his guilt made him appear unstable and delusional.\n\nEventually, he was arrested and charged with Jenkins's murder. His stubborn denial, rather than helping his case, only convinced everyone that he was a man who couldn't face the truth about his own actions.",
        "choices": [],
        "isEnding": true,
        "endingType": "bad"
      },
      "evidence-building": {
        "id": "evidence-building",
        "text": "Miles spent additional time building an airtight case against Marcus. He gathered witness statements, tracked down more physical evidence, and documented Marcus's history of impersonation and fraud. When he finally presented his findings to Harding, the case was overwhelming.\n\nMarcus was arrested without incident, almost as if he had been expecting it. His confession came with a chilling smile - he had enjoyed watching Miles suffer and seemed proud of his elaborate scheme. Miles was fully exonerated, but the psychological scars of the ordeal would remain forever.",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      }
    }
  }
};